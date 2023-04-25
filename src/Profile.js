import React from "react";
import { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
export default function Profile() {

  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const fetchUserAndRepos = async () => {
      const userResponse = await fetch('https://api.github.com/user', {
        headers: {
          'Authorization': 'Bearer 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'
        }
      });
      const userData = await userResponse.json();
      setUser(userData);

      const reposResponse = await fetch('https://api.github.com/user/repos', {
        headers: {
          'Authorization': 'Bearer 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'
        }
      });
      const reposData = await reposResponse.json();
      setRepos(reposData);
    };

    fetchUserAndRepos();
  }, []);
  return (
    <>
      {user ? (

        <div className="min-h-screen bg-gradient-to-r from-blue-500 to-blue-800 flex items-center justify-center">
          <div className="bg-white shadow-xl rounded-lg p-8 w-full md:w-1/2">

            <div className="text-center">
              <div className="relative w-32 h-32 mx-auto">
                <img
                  src={user.avatar_url}
                  alt="Profil"
                  className="object-cover w-32 h-32 rounded-full border-4 border-blue-500"
                />
              </div>
              <h1 className="text-3xl font-semibold mt-4">Jules Boismond</h1>
              <h2 className="text-xl font-medium text-gray-600">julesbsd56@gmail.com</h2>
            </div>
            <div className="mt-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Informations supplémentaires</h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <i className="material-icons text-blue-500">location_on</i>
                  <span className="text-gray-600 ml-2">Vannes, France</span>
                </div>
                <div className="flex items-center  ">
                  <i className="material-icons text-blue-500">Created_at</i>
                  <span className="text-gray-600 ml-2">{user.created_at}</span>
                </div>
                <div className="flex items-center ">
                  <i className="material-icons text-blue-500">Followers</i>
                  <span className="text-gray-600 ml-2">{user.followers}</span>
                </div>
                <div className="flex items-center ">
                  <i className="material-icons text-blue-500">Projets github</i>
                  <span className="text-gray-600 ml-2">{repos.map((repo) => (
                    <a href={repo.html_url} key={repo.id} target="_blank"><li key={repo.id}>{repo.name}</li></a>
                  ))}</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      ) : (
        <div className="min-h-screen bg-gradient-to-r from-blue-500 to-blue-800 flex items-center justify-center">
          <div className="bg-white shadow-xl rounded-lg p-8 w-full md:w-1/2">
            <div className="text-center">
              <div className="relative w-32 h-32 mx-auto">
                <img
                  src="/images/rowan.jpg"
                  alt="Profil"
                  className="object-cover w-32 h-32 rounded-full border-4 border-blue-500"
                />
              </div>
              <h1 className="text-3xl font-semibold mt-4">Jules Boismond</h1>
              <h2 className="text-xl font-medium text-gray-600">julesbsd56@gmail.com</h2>
            </div>
            <div className="mt-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Informations supplémentaires</h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <i className="material-icons text-blue-500">location_on</i>
                  <span className="text-gray-600 ml-2">Vannes, France</span>
                </div>
                <div className="flex items-center">
                  <i className="material-icons text-blue-500">work</i>
                  <span className="text-gray-600 ml-2">Student</span>
                </div>
                <div className="flex items-center">
                  <i className="material-icons text-blue-500">school</i>
                  <span className="text-gray-600 ml-2">My Digital School</span>
                </div>
              </div>
            </div>
          </div>

        </div>

      )}

    </>

  );
}