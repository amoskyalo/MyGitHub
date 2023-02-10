import React from "react";
import axios from "axios";
import { BASE_URL } from "../Instance/Instance";
import { useState, useEffect } from "react";
import { BsFillPeopleFill, BsLink45Deg } from "react-icons/bs";
import { AiOutlineTwitter, AiFillStar } from "react-icons/ai";
import { MdLocationOn } from "react-icons/md";
import { ImOffice } from "react-icons/im";
import { TbGitFork } from "react-icons/tb";

const Header = ({
  image,
  name,
  username,
  joindate,
  followers,
  following,
  blog,
}) => {
  return (
    <div className="flex flex-col justify-between items-center bg-slate-700 py-4 rounded-xl md:px-5 md:flex-row">
      <div className="flex flex-col gap-3 text-center items-center md:w-1/2 md:flex-row md:text-start">
        <img
          src={image}
          alt="user"
          className="w-16 h-16 rounded-full object-cover"
        />
        <div>
          <h2 className="text-xl font-semibold">{name}</h2>
          <p>
            @{username} | <span>Joined {joindate}</span>
          </p>
        </div>
      </div>

      <div className="flex flex-col items-end mt-3 md:mt-0 md:w-1/2">
        <div className="hidden flex-row items-center space-x-2 md:flex">
          <a href={`https://${blog}`}>
            <BsLink45Deg className="text-xl text-cyan-700" />
          </a>
          <a href={blog}>
            <AiOutlineTwitter className="text-xl text-cyan-700" />
          </a>
        </div>
        <div className="flex flex-row space-x-2 items-center">
          <BsFillPeopleFill className="text-cyan-700" />
          <p>{followers} followers</p>
          <span> | </span>
          <p>{following} following</p>
        </div>
      </div>
    </div>
  );
};

const Body = ({ location, bio, company, repos }) => {
  const sliceName = (str, num) => {
    if (str.length > num) {
      return str.slice(0, num) + "...";
    }
    return str;
  };

  return (
    <div className="bg-slate-700 p-5 rounded-xl mt-5">
      <div className="flex flex-col justify-between items-center md:flex-row">
        <div className="space-y-1 text-center md:text-start md:w-3/4">
          <h2 className="text-xl font-semibold">Profile Bio</h2>
          <p>{bio}</p>
        </div>
        <div className="flex flex-row space-x-5 items-end mt-2 md:mt-0 md:w-1/3 md:space-x-0 md:flex-col">
          <p className="flex flex-row items-center capitalize">
            {location} <MdLocationOn className="ml-2 text-xl text-cyan-700" />
          </p>
          <p className="flex flex-row items-center">
            {company !== null ? company : "Company ~ Null"}{" "}
            <ImOffice className="ml-2 text-cyan-700" />
          </p>
        </div>
      </div>
      <div className="my-10 border-t border-dashed border-[#1e293b]"></div>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        {repos?.map((repo) => (
          <div
            key={repo.id}
            className="p-3 bg-[#1e293b] rounded-xl space-y-3 cursor-pointer hover:scale-95 duration-500"
          >
            <h2 className="text-semibold text-lg">
              {repo.name.charAt(0).toUpperCase() +
                repo.name.slice(1, repo.name.length)}
            </h2>
            <p>
              {sliceName(repo.description, 100)}
              {repo.description.length > 100 ? (
                <span className="text-cyan-700">more</span>
              ) : (
                ""
              )}
            </p>
            <div className="flex flex-row justify-between">
              <div className="flex flex-row items-center space-x-3">
                <p className="flex flex-row items-center">
                  <TbGitFork className="mr-1 text-cyan-700" /> {repo.forks}
                </p>
                <p className="flex flex-row items-center">
                  <AiFillStar className="mr-1 text-cyan-700" />{" "}
                  {repo.stargazers_count}
                </p>
              </div>
              <button className="bg-cyan-700 px-3 rounded-xl text-sm">
                {repo.visibility}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const MyGithub = ({ username, token }) => {
  const [data, setData] = useState({});
  const [repos, setRepos] = useState({});

  const fetchUser = async () => {
    try {
      const res = await axios.get(BASE_URL + `/${username}`, {
        headers: {
          Authorization: `Token ${token}`,
        },
      });
      setData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchRepos = async () => {
    try {
      const res = await axios.get(BASE_URL + `/${username}/repos`, {
        headers: {
          Authorization: `Token ${token}`,
        },
      });
      setRepos(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const filterRepos = (repos) => {
    if (!repos) {
      return {};
    } else if (repos.length > 0) {
      return repos.filter(
        (repo) =>
          repo.stargazers_count > 0 &&
          repo.description !== null &&
          repo.description.length > 20
      );
    }
  };

  useEffect(() => {
    fetchUser();
    fetchRepos();
    // eslint-disable-next-line
  }, []);
  return (
    <div className="mx-auto mx-w-3xl xl:max-w-5xl text-white">
      <Header
        image={data.avatar_url}
        name={data.name}
        username={data.login}
        followers={data.followers}
        following={data.following}
        joindate={data.created_at?.slice(0, 10)}
        blog={data.blog}
      />
      <Body
        bio={data.bio}
        location={data.location}
        company={data.company}
        repos={filterRepos(repos)}
      />
    </div>
  );
};

export default MyGithub;
