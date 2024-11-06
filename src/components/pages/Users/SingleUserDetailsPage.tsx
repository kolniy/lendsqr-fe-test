import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { HiArrowLongLeft } from "react-icons/hi2";
// @ts-ignore
import ReactStars from "react-rating-stars-component";
import Layout from "../../DashboardLayout/Layout";
import Loader from "../../Loader/Loader";
import TabPane from "./TabPane";

import { User } from "../../../types";
import { readUserInfo } from "../../../utilities";
import userDetailsImg from "../../../images/user-details-img.png";

import "../../../styles/abstract/_variables.scss";
import "./user-details.scss";

const SingleUserDetailsPage = () => {
  // eslint-disable-next-line
  const [userDataLoading, setUserDataLoading] = useState<boolean>(false);
  const [user, setUser] = useState<User>();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<number>(1);

  const updateActiveTab = (tabNumber: number) => {
    setActiveTab(tabNumber);
  };

  const queryUserFromLocalStorage = () => {
    const user = readUserInfo();
    setUser(user);
  };

  const handleBackToUsersPageClick = () => navigate("/dashboard/users");

  useEffect(() => {
    queryUserFromLocalStorage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Layout>
        {userDataLoading === true ? (
          <Loader />
        ) : (
          <>
            <div className="user-details-page-contents">
              <div className="user-details-page-contents__container">
                <div
                  onClick={handleBackToUsersPageClick}
                  className="page-back__btn"
                >
                  <HiArrowLongLeft className="back-btn-icon" />{" "}
                  <p>Back to Users</p>
                </div>
                <div className="user-details-page-header__info">
                  <h3 className="user-details-page-contents__title">
                    Users Details
                  </h3>
                  <div className="user-details-action-container">
                    <button className="btn-user-action btn-blacklist">
                      Blacklist User
                    </button>
                    <button className="btn-user-action btn-activate">
                      Activate User
                    </button>
                  </div>
                </div>

                <div className="user-info__content">
                  <div className="user-profile-display">
                    <div className="avatar-display">
                      <img
                        src={userDetailsImg}
                        alt="..."
                        className="profile-avatar"
                      />
                    </div>
                    <div className="name-and-organization-name-display">
                      <h3>{`${user?.profile.firstName} ${user?.profile.lastName}`}</h3>
                      <p>{user?.orgName}</p>
                    </div>
                    <div className="user-tier__info">
                      <p>User's Tier</p>
                      <div className="star-gazers">
                        <ReactStars
                          count={3}
                          value={2}
                          size={25}
                          edit={false}
                          activeColor="#E9B200"
                        />
                      </div>
                    </div>
                    <div className="bank-details">
                      <h3>&#8358;{user?.accountBalance}</h3>
                      <p>9912345678/Providus Bank</p>
                    </div>
                  </div>
                  <div className="user-actions-container">
                    <div
                      onClick={() => updateActiveTab(1)}
                      className={`tab-button ${
                        activeTab === 1 && "active-tab"
                      }`}
                    >
                      General Details
                    </div>
                    <div
                      onClick={() => updateActiveTab(2)}
                      className={`tab-button ${
                        activeTab === 2 && "active-tab"
                      }`}
                    >
                      Documents
                    </div>
                    <div
                      onClick={() => updateActiveTab(3)}
                      className={`tab-button ${
                        activeTab === 3 && "active-tab"
                      }`}
                    >
                      Bank Details
                    </div>
                    <div
                      onClick={() => updateActiveTab(4)}
                      className={`tab-button ${
                        activeTab === 4 && "active-tab"
                      }`}
                    >
                      Loans
                    </div>
                    <div
                      onClick={() => updateActiveTab(5)}
                      className={`tab-button ${
                        activeTab === 5 && "active-tab"
                      }`}
                    >
                      Savings
                    </div>
                    <div
                      onClick={() => updateActiveTab(6)}
                      className={`tab-button ${
                        activeTab === 6 && "active-tab"
                      }`}
                    >
                      App and System
                    </div>
                  </div>
                </div>

                <div className="user-actions-content">
                  <TabPane activeTab={activeTab} tabNumber={1}>
                    {/* Basic Profile Information  */}
                    <div className="personal-information-content__container">
                      <h5 className="header-text">Personal Information</h5>
                      <div className="personal-information__container">
                        <div className="personal-information-row__container">
                          <div className="personal-information__item">
                            <div className="information-label">Full Name</div>
                            <div className="information-content">
                              {user?.profile.firstName} {user?.profile.lastName}
                            </div>
                          </div>
                          <div className="personal-information__item">
                            <div className="information-label">
                              Phone Number
                            </div>
                            <div className="information-content">
                              {user?.profile.phoneNumber}
                            </div>
                          </div>
                          <div className="personal-information__item">
                            <div className="information-label">
                              Email Address
                            </div>
                            <div className="information-content">
                              {user?.email}
                            </div>
                          </div>
                          <div className="personal-information__item">
                            <div className="information-label">Bvn</div>
                            <div className="information-content">
                              {user?.profile.bvn}
                            </div>
                          </div>
                          <div className="personal-information__item">
                            <div className="information-label">Gender</div>
                            <div className="information-content">
                              {user?.profile.gender}
                            </div>
                          </div>
                          <div className="personal-information__item">
                            <div className="information-label">
                              Marital Status
                            </div>
                            <div className="information-content">Single</div>
                          </div>
                          <div className="personal-information__item">
                            <div className="information-label">Childern</div>
                            <div className="information-content">None</div>
                          </div>
                          <div className="personal-information__item">
                            <div className="information-label">
                              Type Of residence
                            </div>
                            <div className="information-content">
                              Parent's Apartment
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Education and Emploment information  */}
                    <div className="personal-information-content__container">
                      <h5 className="header-text">Education and Employment</h5>
                      <div className="personal-information__container">
                        <div className="personal-information-row__container-education">
                          <div className="personal-information__item">
                            <div className="information-label">
                              Level of education
                            </div>
                            <div className="information-content">
                              {user?.education.level}
                            </div>
                          </div>
                          <div className="personal-information__item">
                            <div className="information-label">
                              Employment Status
                            </div>
                            <div className="information-content">
                              {user?.education.employmentStatus}
                            </div>
                          </div>
                          <div className="personal-information__item">
                            <div className="information-label">
                              Sector of employment
                            </div>
                            <div className="information-content">
                              {user?.education.sector}
                            </div>
                          </div>
                          <div className="personal-information__item">
                            <div className="information-label">
                              Duration Of Emplyment
                            </div>
                            <div className="information-content">
                              {user?.education.duration}
                            </div>
                          </div>
                          <div className="personal-information__item">
                            <div className="information-label">
                              Officr Email
                            </div>
                            <div className="information-content">
                              {user?.education.officeEmail}
                            </div>
                          </div>
                          <div className="personal-information__item">
                            <div className="information-label">
                              Monthly Income
                            </div>
                            <div className="information-content">
                              {user?.education.monthlyIncome}
                            </div>
                          </div>
                          <div className="personal-information__item">
                            <div className="information-label">
                              Loan Repayment
                            </div>
                            <div className="information-content">
                              {user?.education.loanRepayment}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* socials information  */}
                    <div className="personal-information-content__container">
                      <h5 className="header-text">Socials</h5>
                      <div className="personal-information__container">
                        <div className="personal-information-row__container">
                          <div className="personal-information__item">
                            <div className="information-label">Twitter</div>
                            <div className="information-content">
                              {user?.socials.twitter}
                            </div>
                          </div>
                          <div className="personal-information__item">
                            <div className="information-label">Facebook</div>
                            <div className="information-content">
                              {user?.socials.facebook}
                            </div>
                          </div>
                          <div className="personal-information__item">
                            <div className="information-label">Instagram</div>
                            <div className="information-content">
                              {user?.socials.instagram}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Guarantors Information  */}
                    <div className="personal-information-content__container">
                      <h5 className="header-text">Guarantor</h5>
                      <div className="personal-information__container">
                        <div className="personal-information-row__container">
                          <div className="personal-information__item">
                            <div className="information-label">Full name</div>
                            <div className="information-content">
                              {user?.guarantor.firstName}{" "}
                              {user?.guarantor.lastName}
                            </div>
                          </div>
                          <div className="personal-information__item">
                            <div className="information-label">
                              Phone Number
                            </div>
                            <div className="information-content">
                              {user?.guarantor.phoneNumber}
                            </div>
                          </div>
                          <div className="personal-information__item">
                            <div className="information-label">
                              Email address
                            </div>
                            <div className="information-content">
                              {user?.guarantor.address}
                            </div>
                          </div>
                          <div className="personal-information__item">
                            <div className="information-label">
                              Relationship
                            </div>
                            <div className="information-content">Sister</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="personal-information-content__container">
                      <div className="personal-information__container last-child">
                        <div className="personal-information-row__container">
                          <div className="personal-information__item">
                            <div className="information-label">Full name</div>
                            <div className="information-content">
                              Debby Ogana
                            </div>
                          </div>
                          <div className="personal-information__item">
                            <div className="information-label">
                              Phone Number
                            </div>
                            <div className="information-content">
                              07060780922
                            </div>
                          </div>
                          <div className="personal-information__item">
                            <div className="information-label">
                              Email address
                            </div>
                            <div className="information-content">
                              debby@gmail.com
                            </div>
                          </div>
                          <div className="personal-information__item">
                            <div className="information-label">
                              Relationship
                            </div>
                            <div className="information-content">Sister</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabPane>
                  <TabPane activeTab={activeTab} tabNumber={2}>
                    <div className="tab-under-construction-text">
                      <p>Document's tab Still Under development</p>
                    </div>
                  </TabPane>
                  <TabPane activeTab={activeTab} tabNumber={3}>
                    <div className="tab-under-construction-text">
                      <p>Bank Details Tab Still Under development</p>
                    </div>
                  </TabPane>
                  <TabPane activeTab={activeTab} tabNumber={4}>
                    <div className="tab-under-construction-text">
                      <p>Loan's Tab Still Under development</p>
                    </div>
                  </TabPane>
                  <TabPane activeTab={activeTab} tabNumber={5}>
                    <div className="tab-under-construction-text">
                      <p>Savings Tab Still Under development</p>
                    </div>
                  </TabPane>
                  <TabPane activeTab={activeTab} tabNumber={6}>
                    <div className="tab-under-construction-text">
                      <p>App and Systems Tab Still Under development</p>
                    </div>
                  </TabPane>
                </div>
              </div>
            </div>
          </>
        )}
      </Layout>
    </>
  );
};

export default SingleUserDetailsPage;
