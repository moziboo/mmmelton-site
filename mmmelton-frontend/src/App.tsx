import {FC, useEffect, useState} from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';

interface UserProfile {
  pk: string;
  sk: string;
  email: string;
  pfp: string;
  phone: string;
  name: string;
}

const defaultUserProfile: UserProfile = {
  pk: '',
  sk: '',
  email: '',
  pfp: '',
  phone: '',
  name: '',
}

const App: FC = () => {
  const [toggle, updateToggle] = useState(false);
  const [userProfile, updateUserProfile] = useState<UserProfile>(defaultUserProfile)

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await fetch('http://localhost:8080/'); // Replace with your API endpoint
        if (!response.ok) {
          throw new Error('Failed to fetch user profile');
        }
        const data: UserProfile = await response.json();
        updateUserProfile(data);
        console.log("data: ", data)
      } catch (err:any) {
        throw new Error('catastrophe');
      }
    };

    fetchUserProfile();
  }, []); 

  const handleToggle = () => {
      updateToggle(prev => !prev)
  }

  const handleLink = () => {
    window.scrollTo(0,0);
    if (window.innerWidth < 640)
      handleToggle()
  }

  return (
    <div className="h-screen">
      <div className={`w-full fixed grid grid-col-1 bg-white ${toggle ? 'sm:grid-cols-[1fr,250px]' : ''}`}>
        <Header title="MMMelton" toggle={toggle} onToggle={() => handleToggle()} />
      </div>
      <div className={`h-full grid grid-col-1 ${toggle ? 'sm:grid-cols-[1fr,250px]' : ''}`}>
        <div id="TheStage" className="grid grid-rows-[1fr,auto] pt-[3.9rem]">
          <Main />
          <Footer />
        </div>
        <Sidebar show={toggle} onToggle={handleToggle} onLink={handleLink}/>
      </div>
    </div>
  )
}

export default App