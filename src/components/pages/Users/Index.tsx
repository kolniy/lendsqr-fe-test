import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { HiOutlineUsers } from "react-icons/hi";
import { FaUsers, FaDatabase, FaRegCalendarAlt } from "react-icons/fa";
import { VscGitPullRequestNewChanges } from "react-icons/vsc";
import { IoMdFunnel } from "react-icons/io";
import { IoChevronBackSharp, IoChevronForwardSharp } from "react-icons/io5";
import Layout from "../../DashboardLayout/Layout";
import UseritemContainer from "./UseritemContainer";
import Loader from "../../Loader/Loader";

import { User } from "../../../types";

import "../../../styles/abstract/_variables.scss";
import "./users.scss";

const Index = () => {
  // page loading indication variable. used to display Loader component or
  // page contents after loading is completed.
  const [userDataLoading, setUserDataLoading] = useState<Boolean>(true);
  const [displayFilter, setDisplayFilter] = useState<Boolean>(false);
  const [users, setUsers] = useState<User[]>([]);
  const [page, setPage] = useState<number>(1); // default pagination page
  const [userDisplayCount, setUserDisplayCount] = useState<number>(5); // default number of user details to display
  // on page render
  const formRef = useRef<HTMLFormElement>(null);

  // toggle to control the display of the filter component.
  const toggleDisplayFilter = () => setDisplayFilter(!displayFilter);

  //  get users Data from mock API
  const getUserData = async () => {
    const config = {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_JSON_GEN_API_KEY}`,
      },
    };
    try {
      const response = await axios.get(
        "https://api.json-generator.com/templates/KnKLcWRsa-mx/data",
        config
      );
      setUsers(response.data);
      setUserDataLoading(false);
    } catch (error) {
      setUserDataLoading(false);
      alert("Error Loading user data");
      console.log("error loading user data", error);
    }
  };

  const selectPageHandle = (selectedPage: number) => {
    if (
      selectedPage >= 1 &&
      selectedPage <= users.length / userDisplayCount &&
      selectedPage !== page
    ) {
      setPage(selectedPage);
    }
  };

  // function to generate pagination page number
  const generatePageListing = () => {
    const totalPages = Math.ceil(users.length / userDisplayCount);
    const pageNumbers = [];
    for (var i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }

    const summary = 1;
    const middlePage = page;
    const startPage = Math.max(1, middlePage - summary);
    const endPage = Math.min(totalPages, middlePage + summary);

    const renderPageNumbers = [];
    if (startPage > 1) {
      renderPageNumbers.push(
        <div
          key={1}
          className="pagination-count__item"
          onClick={() => selectPageHandle(1)}
        >
          1
        </div>
      );
      if (startPage > 2) {
        renderPageNumbers.push(
          <div className="pagination-count__item" key={"start-ellipsis"}>
            ...
          </div>
        );
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      const isActive = page === i;
      renderPageNumbers.push(
        <div
          key={i}
          className={`pagination-count__item ${
            isActive && "pagination-active__count"
          }`}
          onClick={() => selectPageHandle(i)}
        >
          {i}
        </div>
      );
    }

    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        renderPageNumbers.push(
          <div className="pagination-ellipsis" key={"end-ellipsis"}>
            ...
          </div>
        );
      }
      renderPageNumbers.push(
        <div
          className="pagination-count__item"
          key={totalPages}
          onClick={() => selectPageHandle(totalPages)}
        >
          {totalPages}
        </div>
      );
    }
    return renderPageNumbers;
  };

  const handleFormReset = () => {
    formRef.current!.reset();
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("filters submitted");
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <>
      <Layout>
        <div className="users-page-contents">
          <div className="users-page-contents__container">
            <h3 className="users-page-contents__title">Users</h3>
            {userDataLoading === true ? (
              <Loader />
            ) : (
              <>
                <div className="users-page-contents__cards">
                  <div className="single-card">
                    <div className="single-card-icon__container users-icon">
                      <HiOutlineUsers className="single-card-icon-users" />
                    </div>
                    <p className="single-card-text">Users</p>
                    <h4 className="single-card__counter">2,453</h4>
                  </div>

                  <div className="single-card">
                    <div className="single-card-icon__container active-user-icon">
                      <FaUsers className="single-card-icon-active-user" />
                    </div>
                    <p className="single-card-text">Active Users</p>
                    <h4 className="single-card__counter">2,453</h4>
                  </div>

                  <div className="single-card">
                    <div className="single-card-icon__container user-loan-icon">
                      <VscGitPullRequestNewChanges className="single-card-icon-user-loan" />
                    </div>
                    <p className="single-card-text">Users with Loans</p>
                    <h4 className="single-card__counter">12,453</h4>
                  </div>

                  <div className="single-card">
                    <div className="single-card-icon__container user-savings-icon">
                      <FaDatabase className="single-card-icon-user-savings" />
                    </div>
                    <p className="single-card-text">Users with savings</p>
                    <h4 className="single-card__counter">2,453</h4>
                  </div>
                </div>
                <div className="users-page-contents-display__table">
                  <div className="table-card">
                    {displayFilter && (
                      <div className="filter-container">
                        <form
                          ref={formRef}
                          onReset={handleFormReset}
                          onSubmit={handleFormSubmit}
                        >
                          <div className="user-filter-form-group">
                            <label>Organization</label>
                            <select className="user-filter-input">
                              <option value={""}>Select</option>
                              <option value={""}>Select</option>
                              <option value={""}>Select</option>
                            </select>
                          </div>
                          <div className="user-filter-form-group">
                            <label>Username</label>
                            <input
                              type="text"
                              placeholder="User"
                              className="user-filter-input"
                            />
                          </div>
                          <div className="user-filter-form-group">
                            <label>Email</label>
                            <input
                              type="email"
                              placeholder="email"
                              className="user-filter-input"
                            />
                          </div>
                          <div className="user-filter-form-group">
                            <label>Date</label>
                            <div className="user-filter-input-container">
                              <input
                                id="date-input"
                                placeholder="Date"
                                type="text"
                                className="filter-date-picker__input"
                              />
                              <div className="filter-icon-container">
                                <FaRegCalendarAlt className="filter-icon" />
                              </div>
                            </div>
                          </div>
                          <div className="user-filter-form-group">
                            <label>Phone Number</label>
                            <input
                              type="text"
                              placeholder="Phone Number"
                              className="user-filter-input"
                            />
                          </div>
                          <div className="user-filter-form-group">
                            <label>Status</label>
                            <select className="user-filter-input">
                              <option value={""}>Select</option>
                              <option value={""}>Select</option>
                              <option value={""}>Select</option>
                            </select>
                          </div>
                          <div className="btn-group-form-control">
                            <button type="reset" className="btn btn-reset">
                              Reset
                            </button>
                            <button type="submit" className="btn btn-filter">
                              Filter
                            </button>
                          </div>
                        </form>
                      </div>
                    )}
                    <div className="table-responsive">
                      <table>
                        <thead>
                          <tr>
                            <td onClick={toggleDisplayFilter}>
                              <span className="table-head-text">
                                Organization{" "}
                                <IoMdFunnel className="table-head-icon" />
                              </span>
                            </td>
                            <td onClick={toggleDisplayFilter}>
                              <span className="table-head-text">
                                Username{" "}
                                <IoMdFunnel className="table-head-icon" />
                              </span>
                            </td>
                            <td onClick={toggleDisplayFilter}>
                              <span className="table-head-text">
                                Email <IoMdFunnel className="table-head-icon" />
                              </span>
                            </td>
                            <td onClick={toggleDisplayFilter}>
                              <span className="table-head-text">
                                Phone Number{" "}
                                <IoMdFunnel className="table-head-icon" />
                              </span>
                            </td>
                            <td onClick={toggleDisplayFilter}>
                              <span className="table-head-text">
                                Date Joined{" "}
                                <IoMdFunnel className="table-head-icon" />
                              </span>
                            </td>
                            <td onClick={toggleDisplayFilter}>
                              <span className="table-head-text">
                                status{" "}
                                <IoMdFunnel className="table-head-icon" />
                              </span>
                            </td>
                            <td style={{ visibility: "hidden" }}>
                              <span className="table-head-text">
                                status{" "}
                                <IoMdFunnel className="table-head-icon" />
                              </span>
                            </td>
                          </tr>
                        </thead>
                        <UseritemContainer
                          users={users}
                          userDataLoading={userDataLoading}
                          userDisplayCount={userDisplayCount}
                          page={page}
                        />
                      </table>
                    </div>
                  </div>
                  <div className="pagination-summary">
                    <div className="pagination-dropdown__btn">
                      <p>Showing</p>
                      <select
                        onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                          setUserDisplayCount(parseInt(e.target.value))
                        }
                      >
                        <option value={5}>5</option>
                        <option value={10}>10</option>
                        <option value={20}>20</option>
                        <option value={50}>50</option>
                        <option value={100}>100</option>
                      </select>
                      <p>out of {users.length}</p>
                    </div>
                    <div className="pagination-actions">
                      <div
                        onClick={() => selectPageHandle(page - 1)}
                        className="btn-handler"
                      >
                        <IoChevronBackSharp className="page-icon-control" />
                      </div>
                      {generatePageListing()}
                      <div
                        onClick={() => selectPageHandle(page + 1)}
                        className="btn-handler"
                      >
                        <IoChevronForwardSharp className="page-icon-control" />
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </Layout>
    </>
  );
};

export default React.memo(Index);
