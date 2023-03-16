import React from "react";

import Sidebar from "components/Sidebar";
import { Text, Input, Img, Button, Line, SelectBox, List } from "components";
import { CloseSVG } from "../../assets/images";
import { useNavigate } from "react-router-dom";

const SettingEditProfilePage: React.FC = () => {
  const navigate = useNavigate();

  const [inputvalue, setInputvalue] = React.useState<string>("");

  return (
    <>
      <div className="bg-gray_100 flex sm:flex-col md:flex-col flex-row font-inter sm:gap-[20px] md:gap-[20px] items-start mx-[auto] w-[100%]">
        <Sidebar className="flex flex-col md:hidden justify-start md:px-[20px] w-[250px]" />
        <div className="flex flex-1 flex-col gap-[31px] items-center justify-start md:px-[20px] w-[100%]">
          <div className="bg-white_A700 border-[1px] border-gray_300 border-solid flex md:flex-col flex-row md:gap-[20px] items-center justify-start p-[20px] w-[100%]">
            <Text
              className="md:ml-[0] ml-[20px] text-gray_900 text-left w-[auto]"
              as="h1"
              variant="h1"
            >
              Services
            </Text>
            <Input
              value={inputvalue}
              onChange={(e) => setInputvalue(e?.target?.value)}
              wrapClassName="flex md:flex-1 md:ml-[0] ml-[482px] md:mt-[0] my-[5px] md:w-[100%] w-[23%]"
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
          <div className="bg-white_A700 flex flex-col gap-[52px] items-center justify-end p-[30px] sm:px-[20px] rounded-[25px] md:w-[100%] w-[94%]">
            <div className="flex flex-col items-start justify-start mt-[7px] w-[100%]">
              <div className="flex sm:flex-col flex-row sm:gap-[20px] items-start justify-start md:w-[100%] w-[39%]">
                <div className="flex flex-col gap-[8px] items-center justify-start sm:w-[100%] w-[29%]">
                  <Text
                    className="font-medium text-indigo_600 text-left w-[auto]"
                    variant="body1"
                  >
                    Edit Profile
                  </Text>
                  <Line className="bg-indigo_600 h-[3px] rounded-bl-[0] rounded-br-[0] rounded-tl-[10px] rounded-tr-[10px] w-[100%]" />
                </div>
                <Text
                  className="common-pointer font-medium sm:ml-[0] ml-[57px] text-bluegray_400 text-left w-[auto]"
                  variant="body1"
                  onClick={() => navigate("/settingpagepreferences")}
                >
                  Preferences
                </Text>
                <Text
                  className="common-pointer font-medium sm:ml-[0] ml-[76px] text-bluegray_400 text-left w-[auto]"
                  variant="body1"
                  onClick={() => navigate("/settingpagesecurity")}
                >
                  Security
                </Text>
              </div>
              <Line className="bg-gray_300 h-[1px] w-[100%]" />
            </div>
            <div className="flex md:flex-col flex-row md:gap-[53px] items-start justify-between w-[100%]">
              <div className="h-[130px] md:mt-[0] mt-[3px] relative md:w-[100%] w-[13%]">
                <Img
                  src="images/img_ellipse1.png"
                  className="absolute h-[130px] inset-[0] justify-center m-[auto] rounded-[50%] w-[130px]"
                  alt="EllipseTwentyEight"
                />
                <Button
                  className="absolute bottom-[12%] flex h-[30px] items-center justify-center right-[0] rounded-[50%] w-[30px]"
                  size="smIcn"
                  variant="icbFillIndigo600"
                >
                  <Img
                    src="images/img_ticket_30X30.svg"
                    className="h-[15px]"
                    alt="ticket"
                  />
                </Button>
              </div>
              <div className="flex md:flex-1 flex-col items-start justify-start md:w-[100%] w-[83%]">
                <div className="md:gap-[20px] gap-[29px] grid md:grid-cols-1 grid-cols-2 justify-center min-h-[auto] w-[100%]">
                  <div className="flex flex-1 flex-col gap-[11px] items-start justify-start rounded-[15px] w-[100%]">
                    <Text
                      className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                      variant="body1"
                    >
                      Your Name
                    </Text>
                    <Input
                      wrapClassName="w-[100%]"
                      className="font-normal leading-[normal] not-italic p-[0] placeholder:text-bluegray_900 text-[15px] text-bluegray_900 text-left w-[100%]"
                      name="language"
                      placeholder="Charlene Reed "
                      shape="RoundedBorder15"
                      size="sm"
                      variant="OutlineGray300"
                    ></Input>
                  </div>
                  <div className="flex flex-1 flex-col gap-[11px] items-start justify-start rounded-[15px] w-[100%]">
                    <Text
                      className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                      variant="body1"
                    >
                      User Name
                    </Text>
                    <Input
                      wrapClassName="w-[100%]"
                      className="font-normal leading-[normal] not-italic p-[0] placeholder:text-bluegray_900 text-[15px] text-bluegray_900 text-left w-[100%]"
                      name="language One"
                      placeholder="Charlene Reed "
                      shape="RoundedBorder15"
                      size="sm"
                      variant="OutlineGray300"
                    ></Input>
                  </div>
                  <div className="flex flex-1 flex-col gap-[11px] items-start justify-start rounded-[15px] w-[100%]">
                    <Text
                      className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                      variant="body1"
                    >
                      Email
                    </Text>
                    <Input
                      wrapClassName="w-[100%]"
                      className="font-normal leading-[normal] not-italic p-[0] placeholder:text-bluegray_900 text-[15px] text-bluegray_900 text-left w-[100%]"
                      name="email One"
                      placeholder="charlenereed@gmail.com "
                      shape="RoundedBorder15"
                      size="sm"
                      variant="OutlineGray300"
                    ></Input>
                  </div>
                  <div className="flex flex-1 flex-col gap-[11px] items-start justify-start rounded-[15px] w-[100%]">
                    <Text
                      className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                      variant="body1"
                    >
                      Password
                    </Text>
                    <Input
                      wrapClassName="w-[100%]"
                      className="font-normal leading-[normal] not-italic p-[0] placeholder:text-bluegray_900 text-[15px] text-bluegray_900 text-left w-[100%]"
                      name="password One"
                      placeholder="**********"
                      shape="RoundedBorder15"
                      size="md"
                      variant="OutlineGray300"
                    ></Input>
                  </div>
                </div>
                <div className="flex md:flex-col flex-row gap-[29px] items-center justify-between mt-[22px] w-[100%]">
                  <div className="flex md:flex-1 flex-col gap-[11px] items-start justify-start md:w-[100%] w-[49%]">
                    <Text
                      className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                      variant="body1"
                    >
                      Date of Birth
                    </Text>
                    <SelectBox
                      className="font-normal leading-[normal] not-italic text-[15px] text-bluegray_900 text-left w-[100%]"
                      placeholderClassName="text-bluegray_900"
                      name="date"
                      placeholder="25 January 1990"
                      isSearchable={false}
                      isMulti={false}
                      indicator={
                        <Img
                          src="images/img_arrowright_bluegray_400.svg"
                          className="h-[6px] mr-[25px] w-[12px]"
                          alt="arrow_down"
                        />
                      }
                      shape="RoundedBorder15"
                      size="sm"
                      variant="OutlineGray300"
                    ></SelectBox>
                  </div>
                  <div className="flex md:flex-1 flex-col gap-[11px] items-start justify-start rounded-[15px] md:w-[100%] w-[49%]">
                    <Text
                      className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                      variant="body1"
                    >
                      Present Address
                    </Text>
                    <Input
                      wrapClassName="w-[100%]"
                      className="font-normal leading-[normal] not-italic p-[0] placeholder:text-bluegray_900 text-[15px] text-bluegray_900 text-left w-[100%]"
                      name="Group195"
                      placeholder="San Jose, California, USA"
                      shape="RoundedBorder15"
                      size="sm"
                      variant="OutlineGray300"
                    ></Input>
                  </div>
                </div>
                <List
                  className="flex-col gap-[22px] grid items-center mt-[22px] w-[100%]"
                  orientation="vertical"
                >
                  <div className="flex flex-1 md:flex-col flex-row gap-[29px] items-center justify-between rounded-[15px] w-[100%]">
                    <div className="flex md:flex-1 flex-col gap-[11px] items-start justify-start rounded-[15px] md:w-[100%] w-[49%]">
                      <Text
                        className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                        variant="body1"
                      >
                        Permanent Address
                      </Text>
                      <Input
                        wrapClassName="w-[100%]"
                        className="font-normal leading-[normal] not-italic p-[0] placeholder:text-bluegray_900 text-[15px] text-bluegray_900 text-left w-[100%]"
                        name="Group195 One"
                        placeholder="San Jose, California, USA"
                        shape="RoundedBorder15"
                        size="sm"
                        variant="OutlineGray300"
                      ></Input>
                    </div>
                    <div className="flex md:flex-1 flex-col gap-[11px] items-start justify-start rounded-[15px] md:w-[100%] w-[49%]">
                      <Text
                        className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                        variant="body1"
                      >
                        City
                      </Text>
                      <Input
                        wrapClassName="w-[100%]"
                        className="font-normal leading-[normal] not-italic p-[0] placeholder:text-bluegray_900 text-[15px] text-bluegray_900 text-left w-[100%]"
                        name="Group195 One"
                        placeholder="San Jose"
                        shape="RoundedBorder15"
                        size="sm"
                        variant="OutlineGray300"
                      ></Input>
                    </div>
                  </div>
                  <div className="flex flex-1 md:flex-col flex-row gap-[29px] items-center justify-between rounded-[15px] w-[100%]">
                    <div className="flex md:flex-1 flex-col gap-[11px] items-start justify-start rounded-[15px] md:w-[100%] w-[49%]">
                      <Text
                        className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                        variant="body1"
                      >
                        Postal Code
                      </Text>
                      <Input
                        wrapClassName="w-[100%]"
                        className="font-normal leading-[normal] not-italic p-[0] placeholder:text-bluegray_900 text-[15px] text-bluegray_900 text-left w-[100%]"
                        name="zipcode"
                        placeholder="45962"
                        shape="RoundedBorder15"
                        size="sm"
                        variant="OutlineGray300"
                      ></Input>
                    </div>
                    <div className="flex md:flex-1 flex-col gap-[11px] items-start justify-start rounded-[15px] md:w-[100%] w-[49%]">
                      <Text
                        className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                        variant="body1"
                      >
                        Country
                      </Text>
                      <Input
                        wrapClassName="w-[100%]"
                        className="font-normal leading-[normal] not-italic p-[0] placeholder:text-bluegray_900 text-[15px] text-bluegray_900 text-left w-[100%]"
                        name="Group195 Two"
                        placeholder="USA"
                        shape="RoundedBorder15"
                        size="sm"
                        variant="OutlineGray300"
                      ></Input>
                    </div>
                  </div>
                </List>
                <Button
                  className="cursor-pointer font-medium leading-[normal] min-w-[190px] md:ml-[0] ml-[675px] mt-[30px] text-[18px] text-center text-white_A700 w-[auto]"
                  shape="RoundedBorder15"
                  size="lg"
                  variant="FillIndigo600"
                >
                  Save
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SettingEditProfilePage;
