package lambda

import (
	"context"
	"naws/models"
	"naws/utils"

	"encoding/json"
	"log"

	"github.com/aws/aws-lambda-go/events"

	"github.com/aws/aws-sdk-go-v2/aws"
	"github.com/aws/aws-sdk-go-v2/config"
	"github.com/aws/aws-sdk-go-v2/feature/dynamodb/attributevalue"
	"github.com/aws/aws-sdk-go-v2/service/dynamodb"
	"github.com/aws/aws-sdk-go-v2/service/dynamodb/types"
)

var svc *dynamodb.Client

func Hello(req events.APIGatewayProxyRequest) (events.APIGatewayProxyResponse, error) {
	headers := utils.HandleCORS(req)

	// Define the key of the item to retrieve
	key := map[string]types.AttributeValue{
		"PK": &types.AttributeValueMemberS{Value: "USER#KELLY"},
		"SK": &types.AttributeValueMemberS{Value: "PROFILE"},
	}

	// Define the input for the GetItem operation
	input := &dynamodb.GetItemInput{
		TableName: aws.String("SINGLE-TABLE"),
		Key:       key,
	}

	// Execute the GetItem operation
	result, err := svc.GetItem(context.TODO(), input)
	if err != nil {
		log.Fatalf("failed to get item from DynamoDB, %v", err)
	}

	// Unmarshal the result into a User struct
	var userprofile models.UserProfile
	err = attributevalue.UnmarshalMap(result.Item, &userprofile)
	if err != nil {
		log.Fatalf("failed to unmarshal item into struct, %v", err)
	}

	// Marshal the UserProfile struct into a JSON string
	userProfileJSON, err := json.Marshal(userprofile)
	if err != nil {
		log.Fatalf("failed to marshal struct into JSON, %v", err)
	}

	resp := events.APIGatewayProxyResponse{
		StatusCode: 200,
		Body:       string(userProfileJSON),
		Headers:    headers,
	}

	return resp, nil
}

func init() {
	// Load the Shared AWS Configuration (e.g., ~/.aws/config)
	cfg, err := config.LoadDefaultConfig(context.TODO(), config.WithRegion("us-west-2"))
	if err != nil {
		log.Fatalf("unable to load SDK config, %v", err)
	}

	// Create a DynamoDB client using the loaded configuration
	svc = dynamodb.NewFromConfig(cfg)
}
