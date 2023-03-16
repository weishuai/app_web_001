import React from "react";

import { Img, Text, Line, Input, Button, List, SelectBox } from "components";
import { CloseSVG } from "../../assets/images";
import { useNavigate } from "react-router-dom";

const CreditCardsPage: React.FC = () => {
  const navigate = useNavigate();

  const [inputvalue, setInputvalue] = React.useState<string>("");

  return (
    <>
      <div className="bg-gray_100 flex sm:flex-col md:flex-col flex-row font-inter sm:gap-[20px] md:gap-[20px] items-start mx-[auto] pb-[30px] w-[100%]">
        <aside className="flex flex-col md:hidden justify-start md:px-[20px] w-[250px]">
          <div className="flex flex-col gap-[50px] items-center justify-start mb-[364px] mt-[30px] w-[100%]">
            <div className="flex flex-row items-center justify-center md:w-[100%] w-[65%]">
              <Img
                src="images/img_logo_indigo_600.png"
                className="h-[40px] md:h-[auto] object-cover w-[40px]"
                alt="LOGO"
              />
              <Text
                className="font-bold ml-[4px] text-indigo_600 text-left w-[auto]"
                as="h2"
                variant="h2"
              >
                FirstBank
              </Text>
            </div>
            <div className="flex flex-col items-start justify-start w-[100%]">
              <div
                className="common-pointer flex items-start justify-start p-[17px] w-[100%]"
                onClick={() => navigate("/")}
              >
                <div className="flex flex-row gap-[20px] items-center justify-start md:ml-[0] ml-[23px] md:w-[100%] w-[65%]">
                  <Img
                    src="images/img_home_25X25.svg"
                    className="h-[25px] w-[25px]"
                    alt="home"
                  />
                  <Text
                    className="font-medium text-bluegray_400 text-left w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    Dashboard
                  </Text>
                </div>
              </div>
              <div
                className="common-pointer flex items-start justify-start p-[17px] w-[100%]"
                onClick={() => navigate("/transaction")}
              >
                <div className="flex flex-row gap-[20px] items-center justify-start md:ml-[0] ml-[23px] md:w-[100%] w-[73%]">
                  <Img
                    src="images/img_glyph.svg"
                    className="h-[25px] w-[25px]"
                    alt="Glyph"
                  />
                  <Text
                    className="font-medium text-bluegray_400 text-left w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    Transactions
                  </Text>
                </div>
              </div>
              <div
                className="common-pointer flex items-start justify-start p-[17px] w-[100%]"
                onClick={() => navigate("/accounts")}
              >
                <div className="flex flex-row gap-[20px] items-start justify-start md:ml-[0] ml-[23px] md:w-[100%] w-[59%]">
                  <Img
                    src="images/img_user.svg"
                    className="h-[25px] w-[25px]"
                    alt="user"
                  />
                  <Text
                    className="font-medium text-bluegray_400 text-left w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    Accounts
                  </Text>
                </div>
              </div>
              <div
                className="common-pointer flex items-start justify-start p-[17px] w-[100%]"
                onClick={() => navigate("/investments")}
              >
                <div className="flex flex-row gap-[20px] items-center justify-start md:ml-[0] ml-[23px] md:w-[100%] w-[70%]">
                  <Img
                    src="images/img_map.svg"
                    className="h-[25px] w-[25px]"
                    alt="map"
                  />
                  <Text
                    className="font-medium text-bluegray_400 text-left w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    Investments
                  </Text>
                </div>
              </div>
              <div className="flex flex-row gap-[34px] items-center justify-start md:w-[100%] w-[78%]">
                <Line className="bg-indigo_600 h-[60px] rounded-bl-[0] rounded-br-[10px] rounded-tl-[0] rounded-tr-[10px] w-[6px]" />
                <div className="flex flex-row gap-[20px] items-center justify-start w-[80%]">
                  <Img
                    src="images/img_file_1.svg"
                    className="h-[25px] w-[25px]"
                    alt="file"
                  />
                  <Text
                    className="font-medium text-indigo_600 text-left w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    Credit Cards
                  </Text>
                </div>
              </div>
              <div
                className="common-pointer flex items-start justify-start p-[17px] w-[100%]"
                onClick={() => navigate("/loan")}
              >
                <div className="flex flex-row gap-[20px] items-start justify-start md:ml-[0] ml-[23px] md:w-[100%] w-[45%]">
                  <Img
                    src="images/img_question.svg"
                    className="h-[25px] w-[25px]"
                    alt="question"
                  />
                  <Text
                    className="font-medium text-bluegray_400 text-left w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    Loans
                  </Text>
                </div>
              </div>
              <div
                className="common-pointer flex items-start justify-start p-[17px] w-[100%]"
                onClick={() => navigate("/services")}
              >
                <div className="flex flex-row gap-[20px] items-center justify-start md:ml-[0] ml-[23px] md:w-[100%] w-[56%]">
                  <Img
                    src="images/img_service1.svg"
                    className="h-[25px] w-[25px]"
                    alt="serviceOne"
                  />
                  <Text
                    className="font-medium text-bluegray_400 text-left w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    Services
                  </Text>
                </div>
              </div>
              <div className="flex items-center justify-start p-[17px] w-[100%]">
                <div className="flex flex-row gap-[20px] items-center justify-center md:w-[100%] w-[75%]">
                  <Img
                    src="images/img_lightbulb.svg"
                    className="h-[25px] w-[25px]"
                    alt="lightbulb"
                  />
                  <Text
                    className="font-medium text-bluegray_400 text-left w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    My Privileges
                  </Text>
                </div>
              </div>
              <div
                className="common-pointer flex items-start justify-start p-[17px] w-[100%]"
                onClick={() => navigate("/settingeditprofile")}
              >
                <div className="flex flex-row gap-[20px] items-center justify-start md:ml-[0] ml-[23px] md:w-[100%] w-[50%]">
                  <Img
                    src="images/img_settings.svg"
                    className="h-[25px] w-[25px]"
                    alt="settings"
                  />
                  <Text
                    className="font-medium text-bluegray_400 text-left w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    Setting
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </aside>
        <div className="flex flex-1 flex-col gap-[25px] items-center justify-start md:px-[20px] w-[100%]">
          <div className="bg-white_A700 border-[1px] border-gray_300 border-solid flex md:flex-col flex-row md:gap-[20px] items-center justify-start p-[20px] w-[100%]">
            <Text
              className="md:ml-[0] ml-[20px] text-gray_900 text-left w-[auto]"
              as="h1"
              variant="h1"
            >
              Credit Cards
            </Text>
            <Input
              value={inputvalue}
              onChange={(e) => setInputvalue(e?.target?.value)}
              wrapClassName="flex md:flex-1 md:ml-[0] ml-[429px] md:mt-[0] my-[5px] md:w-[100%] w-[23%]"
              className="font-normal leading-[normal] not-italic p-[0] placeholder:text-bluegray_400 text-[15px] text-bluegray_400 text-left w-[100%]"
              name="GroupEight"
              placeholder="Search for something"
              prefix={
                <Img
                  src="images/img_search.svg"
                  className="cursor-pointer ml-[25px] mr-[15px] my-[15px]"
                  alt="search"
                />
              }
              suffix={
                <CloseSVG
                  color="#888ea2"
                  className="cursor-pointer my-[auto]"
                  onClick={() => setInputvalue("")}
                  style={{
                    visibility: inputvalue?.length <= 0 ? "hidden" : "visible",
                  }}
                />
              }
              shape="srcCircleBorder25"
              size="smSrc"
              variant="srcFillGray101"
            ></Input>
            <Button
              className="flex h-[50px] items-center justify-center md:ml-[0] ml-[30px] md:mt-[0] my-[5px] rounded-[50%] w-[50px]"
              size="mdIcn"
              variant="icbFillGray102"
            >
              <Img
                src="images/img_settings_50X50.svg"
                className="h-[25px]"
                alt="settings One"
              />
            </Button>
            <Button
              className="flex h-[50px] items-center justify-center md:ml-[0] ml-[30px] md:mt-[0] my-[5px] rounded-[50%] w-[50px]"
              size="mdIcn"
              variant="icbFillGray102"
            >
              <Img
                src="images/img_notification.svg"
                className="h-[25px]"
                alt="notification"
              />
            </Button>
            <Img
              src="images/img_ellipse1.png"
              className="h-[60px] md:h-[auto] md:ml-[0] ml-[35px] rounded-[50%] w-[60px]"
              alt="EllipseOne"
            />
          </div>
          <div className="flex flex-col items-center justify-start md:w-[100%] w-[94%]">
            <div className="flex flex-col gap-[19px] items-start justify-start w-[100%]">
              <Text
                className="text-bluegray_900 text-left w-[auto]"
                as="h3"
                variant="h3"
              >
                My Cards
              </Text>
              <div className="gap-[30px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-center justify-between w-[100%]">
                <div className="bg-indigo_600 flex flex-1 flex-col gap-[33px] items-center justify-end pt-[24px] rounded-[25px] w-[100%]">
                  <div className="flex flex-col gap-[28px] items-start justify-start md:w-[100%] w-[87%]">
                    <div className="flex flex-row items-start justify-between w-[100%]">
                      <div className="flex flex-col items-start justify-start w-[auto]">
                        <Text
                          className="not-italic text-left text-white_A700 w-[auto]"
                          variant="body5"
                        >
                          Balance
                        </Text>
                        <Text
                          className="font-normal mt-[4px] not-italic text-left text-white_A700 w-[auto]"
                          as="h4"
                          variant="h4"
                        >
                          $5,756
                        </Text>
                      </div>
                      <Img
                        src="images/img_chipcard.png"
                        className="h-[34px] md:h-[auto] object-cover w-[34px]"
                        alt="ChipCard"
                      />
                    </div>
                    <div className="flex flex-row gap-[59px] items-center justify-start md:ml-[0] ml-[2px] md:w-[100%] w-[76%]">
                      <div className="flex flex-col items-start justify-start w-[auto]">
                        <Text
                          className="not-italic text-left text-white_A700_b2 w-[auto]"
                          variant="body5"
                        >
                          CARD HOLDER
                        </Text>
                        <Text
                          className="font-normal mt-[4px] not-italic text-left text-white_A700 w-[auto]"
                          variant="body2"
                        >
                          Eddy Cusuma
                        </Text>
                      </div>
                      <div className="flex flex-col items-start justify-start w-[auto]">
                        <Text
                          className="not-italic text-left text-white_A700_b2 w-[auto]"
                          variant="body5"
                        >
                          VALID THRU
                        </Text>
                        <Text
                          className="font-normal mt-[4px] not-italic text-left text-white_A700 w-[auto]"
                          variant="body2"
                        >
                          12/22
                        </Text>
                      </div>
                    </div>
                  </div>
                  <Input
                    wrapClassName="flex w-[100%]"
                    className="font-normal leading-[normal] md:text-[20px] not-italic p-[0] placeholder:text-white_A700 sm:text-[18px] text-[22px] text-left text-white_A700 w-[100%]"
                    name="Group319"
                    placeholder="3778 **** **** 1234"
                    suffix={
                      <Img
                        src="images/img_contrast.svg"
                        className="ml-[35px] mr-[24px] my-[20px]"
                        alt="contrast"
                      />
                    }
                    shape="CustomBorderBL25"
                    size="lg"
                    variant="GradientWhiteA70026WhiteA70026"
                  ></Input>
                </div>
                <div className="bg-indigo_500 flex flex-1 flex-col gap-[33px] items-center justify-end pt-[24px] rounded-[25px] w-[100%]">
                  <div className="flex flex-col gap-[28px] items-start justify-start md:w-[100%] w-[87%]">
                    <div className="flex flex-row items-start justify-between w-[100%]">
                      <div className="flex flex-col items-start justify-start w-[auto]">
                        <Text
                          className="not-italic text-left text-white_A700 w-[auto]"
                          variant="body5"
                        >
                          Balance
                        </Text>
                        <Text
                          className="font-normal mt-[4px] not-italic text-left text-white_A700 w-[auto]"
                          as="h4"
                          variant="h4"
                        >
                          $5,756
                        </Text>
                      </div>
                      <Img
                        src="images/img_chipcard.png"
                        className="h-[34px] md:h-[auto] object-cover w-[34px]"
                        alt="ChipCard One"
                      />
                    </div>
                    <div className="flex flex-row gap-[59px] items-center justify-start md:ml-[0] ml-[2px] md:w-[100%] w-[76%]">
                      <div className="flex flex-col items-start justify-start w-[auto]">
                        <Text
                          className="not-italic text-left text-white_A700_b2 w-[auto]"
                          variant="body5"
                        >
                          CARD HOLDER
                        </Text>
                        <Text
                          className="font-normal mt-[4px] not-italic text-left text-white_A700 w-[auto]"
                          variant="body2"
                        >
                          Eddy Cusuma
                        </Text>
                      </div>
                      <div className="flex flex-col items-start justify-start w-[auto]">
                        <Text
                          className="not-italic text-left text-white_A700_b2 w-[auto]"
                          variant="body5"
                        >
                          VALID THRU
                        </Text>
                        <Text
                          className="font-normal mt-[4px] not-italic text-left text-white_A700 w-[auto]"
                          variant="body2"
                        >
                          12/22
                        </Text>
                      </div>
                    </div>
                  </div>
                  <Input
                    wrapClassName="flex w-[100%]"
                    className="font-normal leading-[normal] md:text-[20px] not-italic p-[0] placeholder:text-white_A700 sm:text-[18px] text-[22px] text-left text-white_A700 w-[100%]"
                    name="Group319 One"
                    placeholder="3778 **** **** 1234"
                    suffix={
                      <Img
                        src="images/img_contrast.svg"
                        className="ml-[35px] mr-[24px] my-[20px]"
                        alt="contrast"
                      />
                    }
                    shape="CustomBorderBL25"
                    size="lg"
                    variant="GradientWhiteA70026WhiteA70026"
                  ></Input>
                </div>
                <div className="bg-indigo_300 border-[1px] border-gray_103 border-solid flex flex-1 flex-col gap-[33px] items-center justify-end pt-[24px] rounded-[25px] w-[100%]">
                  <div className="flex flex-col gap-[28px] items-start justify-start md:w-[100%] w-[87%]">
                    <div className="flex flex-row items-start justify-between w-[100%]">
                      <div className="flex flex-col items-start justify-start w-[auto]">
                        <Text
                          className="not-italic text-left text-white_A700 w-[auto]"
                          variant="body5"
                        >
                          Balance
                        </Text>
                        <Text
                          className="font-normal mt-[4px] not-italic text-left text-white_A700 w-[auto]"
                          as="h4"
                          variant="h4"
                        >
                          $5,756
                        </Text>
                      </div>
                      <Img
                        src="images/img_chipcard.png"
                        className="h-[34px] md:h-[auto] object-cover w-[34px]"
                        alt="ChipCard Two"
                      />
                    </div>
                    <div className="flex flex-row gap-[59px] items-center justify-start md:ml-[0] ml-[2px] md:w-[100%] w-[76%]">
                      <div className="flex flex-col items-start justify-start w-[auto]">
                        <Text
                          className="not-italic text-left text-white_A700_b2 w-[auto]"
                          variant="body5"
                        >
                          CARD HOLDER
                        </Text>
                        <Text
                          className="font-normal mt-[4px] not-italic text-left text-white_A700 w-[auto]"
                          variant="body2"
                        >
                          Eddy Cusuma
                        </Text>
                      </div>
                      <div className="flex flex-col items-start justify-start w-[auto]">
                        <Text
                          className="not-italic text-left text-white_A700_b2 w-[auto]"
                          variant="body5"
                        >
                          VALID THRU
                        </Text>
                        <Text
                          className="font-normal mt-[4px] not-italic text-left text-white_A700 w-[auto]"
                          variant="body2"
                        >
                          12/22
                        </Text>
                      </div>
                    </div>
                  </div>
                  <Input
                    wrapClassName="flex w-[100%]"
                    className="font-normal leading-[normal] md:text-[20px] not-italic p-[0] placeholder:text-white_A700 sm:text-[18px] text-[22px] text-left text-white_A700 w-[100%]"
                    name="Group319 Two"
                    placeholder="3778 **** **** 1234"
                    suffix={
                      <Img
                        src="images/img_contrast.svg"
                        className="ml-[35px] mr-[24px] my-[20px]"
                        alt="contrast"
                      />
                    }
                    shape="CustomBorderBL25"
                    size="lg"
                    variant="GradientWhiteA70026WhiteA70026"
                  ></Input>
                </div>
              </div>
            </div>
            <div className="flex md:flex-col flex-row gap-[30px] items-center justify-between mt-[25px] w-[100%]">
              <div className="flex md:flex-1 flex-col gap-[20px] items-start justify-start md:w-[100%] w-[32%]">
                <Text
                  className="text-bluegray_900 text-left w-[auto]"
                  as="h3"
                  variant="h3"
                >
                  Card Expense Statistics
                </Text>
                <div className="bg-white_A700 flex flex-col gap-[16px] items-center justify-end p-[28px] sm:px-[20px] rounded-[25px] w-[100%]">
                  <Img
                    src="images/img_group346chart.svg"
                    className="h-[186px] mt-[2px] w-[64%]"
                    alt="Group346Chart"
                  />
                  <List
                    className="flex-col gap-[14px] grid items-center w-[86%]"
                    orientation="vertical"
                  >
                    <div className="flex flex-row items-center justify-between md:w-[100%] w-[99%]">
                      <div className="flex flex-row gap-[12px] items-start justify-start w-[39%]">
                        <div className="bg-indigo_100 h-[15px] rounded-[50%] w-[15px]"></div>
                        <Text
                          className="font-medium text-bluegray_400 text-left w-[auto]"
                          variant="body2"
                        >
                          DBL Bank
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[12px] items-start justify-start w-[40%]">
                        <div className="bg-indigo_500 h-[15px] rounded-[50%] w-[15px]"></div>
                        <Text
                          className="font-medium text-bluegray_400 text-left w-[auto]"
                          variant="body2"
                        >
                          BRC Bank
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-between w-[100%]">
                      <div className="flex flex-row gap-[12px] items-start justify-start w-[41%]">
                        <div className="bg-indigo_600 h-[15px] rounded-[50%] w-[15px]"></div>
                        <Text
                          className="font-medium text-bluegray_400 text-left w-[auto]"
                          variant="body2"
                        >
                          ABM Bank
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[12px] items-start justify-start w-[41%]">
                        <div className="bg-indigo_200 h-[15px] rounded-[50%] w-[15px]"></div>
                        <Text
                          className="font-medium text-bluegray_400 text-left w-[auto]"
                          variant="body2"
                        >
                          MCP Bank
                        </Text>
                      </div>
                    </div>
                  </List>
                </div>
              </div>
              <div className="flex md:flex-1 flex-col gap-[20px] items-start justify-start md:w-[100%] w-[66%]">
                <Text
                  className="text-bluegray_900 text-left w-[auto]"
                  as="h3"
                  variant="h3"
                >
                  Card List
                </Text>
                <List
                  className="flex-col gap-[20px] grid items-center w-[100%]"
                  orientation="vertical"
                >
                  <div className="bg-white_A700 flex flex-1 md:flex-col flex-row md:gap-[20px] items-center justify-start p-[15px] rounded-[20px] w-[100%]">
                    <Button
                      className="flex h-[60px] items-center justify-center w-[60px]"
                      shape="icbRoundedBorder20"
                      size="lgIcn"
                      variant="icbFillGray102"
                    >
                      <Img
                        src="images/img_file_1.svg"
                        className="h-[26px]"
                        alt="file One"
                      />
                    </Button>
                    <div className="flex md:flex-1 flex-col gap-[7px] items-center justify-start md:ml-[0] ml-[15px] md:w-[100%] w-[auto]">
                      <Text
                        className="font-medium text-bluegray_900 text-left w-[auto]"
                        variant="body1"
                      >
                        Card Type
                      </Text>
                      <Text
                        className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                        variant="body2"
                      >
                        Secondary
                      </Text>
                    </div>
                    <div className="flex md:flex-1 flex-col gap-[7px] items-start justify-start md:ml-[0] ml-[43px] md:w-[100%] w-[auto]">
                      <Text
                        className="font-medium text-bluegray_900 text-left w-[auto]"
                        variant="body1"
                      >
                        Bank
                      </Text>
                      <Text
                        className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                        variant="body2"
                      >
                        DBL Bank
                      </Text>
                    </div>
                    <div className="flex md:flex-1 flex-col gap-[7px] items-center justify-start md:ml-[0] ml-[44px] md:w-[100%] w-[auto]">
                      <Text
                        className="font-medium text-bluegray_900 text-left w-[auto]"
                        variant="body1"
                      >
                        Card Number
                      </Text>
                      <Text
                        className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                        variant="body2"
                      >
                        **** **** 5600
                      </Text>
                    </div>
                    <div className="flex md:flex-1 flex-col gap-[7px] items-start justify-start md:ml-[0] ml-[47px] md:w-[100%] w-[auto]">
                      <Text
                        className="font-medium text-bluegray_900 text-left w-[auto]"
                        variant="body1"
                      >
                        Namain Card
                      </Text>
                      <Text
                        className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                        variant="body2"
                      >
                        William{" "}
                      </Text>
                    </div>
                    <Text
                      className="font-medium md:ml-[0] ml-[34px] text-indigo_500 text-left w-[auto]"
                      variant="body2"
                    >
                      View Details
                    </Text>
                  </div>
                  <div className="bg-white_A700 flex flex-1 md:flex-col flex-row md:gap-[20px] items-center justify-start p-[15px] rounded-[20px] w-[100%]">
                    <Button
                      className="flex h-[60px] items-center justify-center w-[60px]"
                      shape="icbRoundedBorder20"
                      size="lgIcn"
                      variant="icbFillGray102"
                    >
                      <Img
                        src="images/img_file_1.svg"
                        className="h-[26px]"
                        alt="file Two"
                      />
                    </Button>
                    <div className="flex md:flex-1 flex-col gap-[7px] items-center justify-start md:ml-[0] ml-[15px] md:w-[100%] w-[auto]">
                      <Text
                        className="font-medium text-bluegray_900 text-left w-[auto]"
                        variant="body1"
                      >
                        Card Type
                      </Text>
                      <Text
                        className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                        variant="body2"
                      >
                        Secondary
                      </Text>
                    </div>
                    <div className="flex md:flex-1 flex-col gap-[7px] items-start justify-start md:ml-[0] ml-[43px] md:w-[100%] w-[auto]">
                      <Text
                        className="font-medium text-bluegray_900 text-left w-[auto]"
                        variant="body1"
                      >
                        Bank
                      </Text>
                      <Text
                        className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                        variant="body2"
                      >
                        BRC Bank
                      </Text>
                    </div>
                    <div className="flex md:flex-1 flex-col gap-[7px] items-center justify-start md:ml-[0] ml-[43px] md:w-[100%] w-[auto]">
                      <Text
                        className="font-medium text-bluegray_900 text-left w-[auto]"
                        variant="body1"
                      >
                        Card Number
                      </Text>
                      <Text
                        className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                        variant="body2"
                      >
                        **** **** 4300
                      </Text>
                    </div>
                    <div className="flex md:flex-1 flex-col gap-[7px] items-start justify-start md:ml-[0] ml-[46px] md:w-[100%] w-[auto]">
                      <Text
                        className="font-medium text-indigo_600 text-left w-[auto]"
                        variant="body1"
                      >
                        Namain Card
                      </Text>
                      <Text
                        className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                        variant="body2"
                      >
                        Michel
                      </Text>
                    </div>
                    <Text
                      className="font-medium md:ml-[0] ml-[34px] text-indigo_500 text-left w-[auto]"
                      variant="body2"
                    >
                      View Details
                    </Text>
                  </div>
                  <div className="bg-white_A700 flex flex-1 md:flex-col flex-row md:gap-[20px] items-center justify-start p-[15px] rounded-[20px] w-[100%]">
                    <Button
                      className="flex h-[60px] items-center justify-center w-[60px]"
                      shape="icbRoundedBorder20"
                      size="lgIcn"
                      variant="icbFillGray102"
                    >
                      <Img
                        src="images/img_file_1.svg"
                        className="h-[26px]"
                        alt="file Three"
                      />
                    </Button>
                    <div className="flex md:flex-1 flex-col gap-[7px] items-center justify-start md:ml-[0] ml-[15px] md:w-[100%] w-[auto]">
                      <Text
                        className="font-medium text-bluegray_900 text-left w-[auto]"
                        variant="body1"
                      >
                        Card Type
                      </Text>
                      <Text
                        className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                        variant="body2"
                      >
                        Secondary
                      </Text>
                    </div>
                    <div className="flex md:flex-1 flex-col gap-[7px] items-start justify-start md:ml-[0] ml-[43px] md:w-[100%] w-[auto]">
                      <Text
                        className="font-medium text-bluegray_900 text-left w-[auto]"
                        variant="body1"
                      >
                        Bank
                      </Text>
                      <Text
                        className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                        variant="body2"
                      >
                        ABM Bank
                      </Text>
                    </div>
                    <div className="flex md:flex-1 flex-col gap-[7px] items-center justify-start md:ml-[0] ml-[40px] md:w-[100%] w-[auto]">
                      <Text
                        className="font-medium text-bluegray_900 text-left w-[auto]"
                        variant="body1"
                      >
                        Card Number
                      </Text>
                      <Text
                        className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                        variant="body2"
                      >
                        **** **** 7560
                      </Text>
                    </div>
                    <div className="flex md:flex-1 flex-col gap-[7px] items-start justify-start md:ml-[0] ml-[48px] md:w-[100%] w-[auto]">
                      <Text
                        className="font-medium text-bluegray_900 text-left w-[auto]"
                        variant="body1"
                      >
                        Namain Card
                      </Text>
                      <Text
                        className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                        variant="body2"
                      >
                        Edward
                      </Text>
                    </div>
                    <Text
                      className="font-medium md:ml-[0] ml-[34px] text-indigo_500 text-left w-[auto]"
                      variant="body2"
                    >
                      View Details
                    </Text>
                  </div>
                </List>
              </div>
            </div>
            <div className="flex md:flex-col flex-row gap-[30px] items-center justify-between mt-[24px] w-[100%]">
              <div className="flex md:flex-1 flex-col gap-[20px] items-start justify-start md:w-[100%] w-[66%]">
                <Text
                  className="text-bluegray_900 text-left w-[auto]"
                  as="h3"
                  variant="h3"
                >
                  Add New Card
                </Text>
                <div className="bg-white_A700 flex flex-col items-start justify-start p-[27px] sm:px-[20px] rounded-[25px] w-[100%]">
                  <Text
                    className="font-normal leading-[28.00px] md:ml-[0] ml-[3px] not-italic text-bluegray_400 text-left sm:w-[100%] w-[94%]"
                    variant="body1"
                  >
                    Credit Card generally means a plastic card issued by
                    Scheduled Commercial Banks assigned to a Cardholder, with a
                    credit limit, that can be used to purchase goods and
                    services on credit or obtain cash advances.
                  </Text>
                  <div className="flex md:flex-col flex-row gap-[30px] items-center justify-between md:ml-[0] ml-[3px] mt-[29px] rounded-[15px] w-[100%]">
                    <div className="flex md:flex-1 flex-col gap-[11px] items-start justify-start rounded-[15px] md:w-[100%] w-[48%]">
                      <Text
                        className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                        variant="body1"
                      >
                        Card Type
                      </Text>
                      <Input
                        wrapClassName="w-[100%]"
                        className="font-normal leading-[normal] not-italic p-[0] placeholder:text-bluegray_900 text-[15px] text-bluegray_900 text-left w-[100%]"
                        name="Group195"
                        placeholder="Classic"
                        shape="RoundedBorder15"
                        size="sm"
                        variant="OutlineGray300"
                      ></Input>
                    </div>
                    <div className="flex md:flex-1 flex-col gap-[11px] items-start justify-start rounded-[15px] md:w-[100%] w-[48%]">
                      <Text
                        className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                        variant="body1"
                      >
                        Name On Card
                      </Text>
                      <Input
                        wrapClassName="w-[100%]"
                        className="font-normal leading-[normal] not-italic p-[0] placeholder:text-bluegray_900 text-[15px] text-bluegray_900 text-left w-[100%]"
                        name="Group195 One"
                        placeholder="My Cards"
                        shape="RoundedBorder15"
                        size="sm"
                        variant="OutlineGray300"
                      ></Input>
                    </div>
                  </div>
                  <div className="flex md:flex-col flex-row gap-[30px] items-center justify-between md:ml-[0] ml-[3px] mt-[22px] w-[100%]">
                    <div className="flex md:flex-1 flex-col gap-[11px] items-start justify-start rounded-[15px] md:w-[100%] w-[48%]">
                      <Text
                        className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                        variant="body1"
                      >
                        Card Number
                      </Text>
                      <Input
                        wrapClassName="w-[100%]"
                        className="font-normal leading-[normal] not-italic p-[0] placeholder:text-bluegray_900 text-[15px] text-bluegray_900 text-left w-[100%]"
                        type="password"
                        name="Group195 Two"
                        placeholder="**** **** **** ****"
                        shape="RoundedBorder15"
                        size="md"
                        variant="OutlineGray300"
                      ></Input>
                    </div>
                    <div className="flex md:flex-1 flex-col gap-[11px] items-start justify-start md:w-[100%] w-[48%]">
                      <Text
                        className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                        variant="body1"
                      >
                        Expiration Date
                      </Text>
                      <SelectBox
                        className="font-normal leading-[normal] not-italic text-[15px] text-bluegray_900 text-left w-[100%]"
                        placeholderClassName="text-bluegray_900"
                        name="date"
                        placeholder="25 January 2025"
                        isSearchable={false}
                        isMulti={false}
                        indicator={
                          <Img
                            src="images/img_arrowdown.svg"
                            className="h-[24px] mr-[19px] w-[24px]"
                            alt="arrow_down"
                          />
                        }
                        shape="RoundedBorder15"
                        size="sm"
                        variant="OutlineGray300"
                      ></SelectBox>
                    </div>
                  </div>
                  <Button
                    className="cursor-pointer font-medium leading-[normal] mb-[11px] min-w-[160px] md:ml-[0] ml-[3px] mt-[30px] text-[18px] text-center text-white_A700 w-[auto]"
                    shape="RoundedBorder10"
                    size="lg"
                    variant="FillIndigo600"
                  >
                    Add Card
                  </Button>
                </div>
              </div>
              <div className="flex md:flex-1 flex-col gap-[20px] items-start justify-start md:w-[100%] w-[32%]">
                <Text
                  className="text-bluegray_900 text-left w-[auto]"
                  as="h3"
                  variant="h3"
                >
                  Card Setting
                </Text>
                <List
                  className="bg-white_A700 flex-col gap-[20px] grid items-center p-[30px] sm:px-[20px] rounded-[25px] w-[100%]"
                  orientation="vertical"
                >
                  <div className="flex md:flex-1 flex-row gap-[20px] items-center justify-start md:w-[100%] w-[88%]">
                    <Button
                      className="flex h-[60px] items-center justify-center w-[60px]"
                      shape="icbRoundedBorder20"
                      size="lgIcn"
                      variant="icbFillGray102"
                    >
                      <Img
                        src="images/img_videocamera_60X60.svg"
                        className="h-[25px]"
                        alt="videocamera"
                      />
                    </Button>
                    <div className="flex flex-col gap-[7px] items-start justify-start w-[auto]">
                      <Text
                        className="font-medium text-bluegray_900 text-left w-[auto]"
                        variant="body1"
                      >
                        Block Card
                      </Text>
                      <Text
                        className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                        variant="body2"
                      >
                        Instantly block your card
                      </Text>
                    </div>
                  </div>
                  <div className="flex md:flex-1 flex-row gap-[20px] items-center justify-start md:w-[100%] w-[90%]">
                    <Button
                      className="flex h-[60px] items-center justify-center w-[60px]"
                      shape="icbRoundedBorder20"
                      size="lgIcn"
                      variant="icbFillGray102"
                    >
                      <Img
                        src="images/img_lock.svg"
                        className="h-[25px]"
                        alt="lock"
                      />
                    </Button>
                    <div className="flex flex-col gap-[7px] items-start justify-start w-[auto]">
                      <Text
                        className="font-medium text-bluegray_900 text-left w-[auto]"
                        variant="body1"
                      >
                        Change Pin Code
                      </Text>
                      <Text
                        className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                        variant="body2"
                      >
                        Choose another pin code
                      </Text>
                    </div>
                  </div>
                  <div className="flex md:flex-1 flex-row gap-[20px] items-center justify-start md:w-[100%] w-[94%]">
                    <Button
                      className="flex h-[60px] items-center justify-center w-[60px]"
                      shape="icbRoundedBorder20"
                      size="lgIcn"
                      variant="icbFillGray102"
                    >
                      <Img
                        src="images/img_google_60X60.svg"
                        className="h-[25px]"
                        alt="google"
                      />
                    </Button>
                    <div className="flex flex-col gap-[7px] items-start justify-start w-[auto]">
                      <Text
                        className="font-medium text-bluegray_900 text-left w-[auto]"
                        variant="body1"
                      >
                        Add to Google Pay
                      </Text>
                      <Text
                        className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                        variant="body2"
                      >
                        Withdraw without any card
                      </Text>
                    </div>
                  </div>
                  <div className="flex md:flex-1 flex-row gap-[20px] items-center justify-start md:w-[100%] w-[94%]">
                    <Button
                      className="flex h-[60px] items-center justify-center w-[60px]"
                      shape="icbRoundedBorder20"
                      size="lgIcn"
                      variant="icbFillGray102"
                    >
                      <Img
                        src="images/img_maximize.svg"
                        className="h-[25px]"
                        alt="maximize"
                      />
                    </Button>
                    <div className="flex flex-col gap-[7px] items-start justify-start w-[auto]">
                      <Text
                        className="font-medium text-bluegray_900 text-left w-[auto]"
                        variant="body1"
                      >
                        Add to Apple Pay
                      </Text>
                      <Text
                        className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                        variant="body2"
                      >
                        Withdraw without any card
                      </Text>
                    </div>
                  </div>
                  <div className="flex md:flex-1 flex-row gap-[20px] items-center justify-start md:w-[100%] w-[94%]">
                    <Button
                      className="flex h-[60px] items-center justify-center w-[60px]"
                      shape="icbRoundedBorder20"
                      size="lgIcn"
                      variant="icbFillGray102"
                    >
                      <Img
                        src="images/img_maximize.svg"
                        className="h-[25px]"
                        alt="maximize One"
                      />
                    </Button>
                    <div className="flex flex-col gap-[7px] items-start justify-start w-[auto]">
                      <Text
                        className="font-medium text-bluegray_900 text-left w-[auto]"
                        variant="body1"
                      >
                        Add to Apple Store
                      </Text>
                      <Text
                        className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                        variant="body2"
                      >
                        Withdraw without any card
                      </Text>
                    </div>
                  </div>
                </List>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreditCardsPage;
