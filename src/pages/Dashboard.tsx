import { FunctionComponent } from "react";

const Dashboard: FunctionComponent = () => {
  return (
    <div className="relative bg-color-white w-full h-[2310px] overflow-hidden text-left text-17xl text-color-white font-text-text-regular-2">
      <div className="absolute top-[0px] left-[calc(50%_-_960px)] w-[345px] h-[2310px]">
        <div className="absolute top-[0px] left-[calc(50%_-_172.5px)] bg-color-purple w-[345px] h-[2310px]" />
        <div className="absolute top-[150px] left-[46px] flex flex-col items-start justify-start gap-[8px] text-lg text-color-gray-2">
          <div className="rounded-tl-21xl rounded-tr-none rounded-br-none rounded-bl-21xl bg-color-background shadow-[0px_20px_50px_rgba(191,_21,_108,_0.05)] w-[299px] h-16 flex flex-row items-center justify-start py-4 px-6 box-border gap-[24px] text-color-purple">
            <img
              className="relative w-10 h-10 overflow-hidden shrink-0"
              alt=""
              src="/home.svg"
            />
            <div className="relative font-medium">Dashboard</div>
          </div>
          <div className="rounded-tl-21xl rounded-tr-none rounded-br-none rounded-bl-21xl w-[299px] flex flex-row items-center justify-start py-4 px-6 box-border gap-[24px]">
            <img
              className="relative w-10 h-10 overflow-hidden shrink-0"
              alt=""
              src="/student.svg"
            />
            <div className="relative font-medium">Students</div>
          </div>
          <div className="rounded-tl-21xl rounded-tr-none rounded-br-none rounded-bl-21xl w-[299px] flex flex-row items-center justify-start py-4 px-6 box-border gap-[24px]">
            <img
              className="relative w-10 h-10 overflow-hidden shrink-0"
              alt=""
              src="/teacher.svg"
            />
            <div className="relative font-medium">Teachers</div>
          </div>
          <div className="rounded-tl-21xl rounded-tr-none rounded-br-none rounded-bl-21xl w-[299px] flex flex-row items-center justify-start py-4 px-6 box-border gap-[24px]">
            <img
              className="relative w-10 h-10 overflow-hidden shrink-0"
              alt=""
              src="/calendar.svg"
            />
            <div className="relative font-medium">Event</div>
          </div>
          <div className="rounded-tl-21xl rounded-tr-none rounded-br-none rounded-bl-21xl w-[299px] flex flex-row items-center justify-start py-4 px-6 box-border gap-[24px]">
            <img
              className="relative w-10 h-10 overflow-hidden shrink-0"
              alt=""
              src="/finance.svg"
            />
            <div className="relative font-medium">Finance</div>
          </div>
          <div className="rounded-tl-21xl rounded-tr-none rounded-br-none rounded-bl-21xl w-[299px] flex flex-row items-center justify-start py-4 px-6 box-border gap-[24px]">
            <img
              className="relative w-10 h-10 overflow-hidden shrink-0"
              alt=""
              src="/food.svg"
            />
            <div className="relative font-medium">Food</div>
          </div>
          <div className="rounded-tl-21xl rounded-tr-none rounded-br-none rounded-bl-21xl w-[299px] flex flex-row items-center justify-start py-4 px-6 box-border gap-[24px]">
            <img
              className="relative w-10 h-10 overflow-hidden shrink-0"
              alt=""
              src="/user.svg"
            />
            <div className="relative font-medium">User</div>
          </div>
          <div className="rounded-tl-21xl rounded-tr-none rounded-br-none rounded-bl-21xl w-[299px] flex flex-row items-center justify-start py-4 px-6 box-border gap-[24px]">
            <img
              className="relative w-10 h-10 overflow-hidden shrink-0"
              alt=""
              src="/chat.svg"
            />
            <div className="relative font-medium">Chat</div>
          </div>
          <div className="rounded-tl-21xl rounded-tr-none rounded-br-none rounded-bl-21xl w-[299px] flex flex-row items-center justify-start py-4 px-6 box-border gap-[24px]">
            <img
              className="relative w-10 h-10 overflow-hidden shrink-0"
              alt=""
              src="/activity.svg"
            />
            <div className="relative font-medium">Lastest Activity</div>
          </div>
        </div>
        <div className="absolute top-[934px] left-[calc(50%_-_138.5px)] w-[292px] h-[57px] text-sm">
          <div className="absolute top-[36px] left-[calc(50%_-_146px)] inline-block w-[245px]">
            Made with ♥ by Peterdraw
          </div>
          <b className="absolute top-[0px] left-[calc(50%_-_146px)]">
            Akademi - School Admission Dashboard
          </b>
        </div>
        <b className="absolute top-[50px] left-[110px]">Akademi</b>
        <div className="absolute top-[50px] left-[46px] w-12 h-[54px]">
          <div className="absolute top-[3px] left-[0px] rounded-2xl bg-color-orange w-12 h-12" />
          <b className="absolute top-[0px] left-[11px]">A</b>
        </div>
      </div>
      <div className="absolute top-[0px] left-[345px] w-[1180px] h-[2310px] text-lg text-color-gray-1">
        <div className="absolute top-[0px] left-[0px] bg-color-background w-[1180px] h-[2310px]" />
        <b className="absolute top-[50px] left-[50px] text-17xl text-color-text">
          Dashboard
        </b>
        <div className="absolute top-[50px] left-[calc(50%_+_190px)] rounded-21xl bg-color-white w-[350px] h-[60px] flex flex-row items-center justify-start py-0.5 pr-8 pl-0 box-border">
          <div className="rounded-[22px] h-[60px] flex flex-row items-center justify-start py-[23px] px-8 box-border gap-[16px]">
            <img
              className="relative w-8 h-8 overflow-hidden shrink-0"
              alt=""
              src="/search.svg"
            />
            <div className="relative">Search here...</div>
          </div>
        </div>
        <div className="absolute top-[150px] left-[50px] w-[1080px] h-[172px]">
          <div className="absolute top-[0px] left-[0px] rounded-xl bg-color-white w-[1080px] h-[172px]" />
          <div className="absolute top-[46px] left-[47px] w-[965px] h-[81px]">
            <div className="absolute top-[0px] left-[0px] w-[182px] h-[81px]">
              <div className="absolute top-[0px] left-[102px] w-20 h-[81px]">
                <div className="absolute top-[0px] left-[0px]">Students</div>
                <b className="absolute top-[27px] left-[0px] text-17xl text-color-text">
                  932
                </b>
              </div>
              <img
                className="absolute top-[4px] left-[0px] w-[72px] h-[72px]"
                alt=""
                src="/icon.svg"
              />
            </div>
            <div className="absolute top-[0px] left-[264px] w-[187px] h-[81px]">
              <div className="absolute top-[0px] left-[104px] w-[83px] h-[81px]">
                <div className="absolute top-[0px] left-[0px]">Teachers</div>
                <b className="absolute top-[27px] left-[0px] text-17xl text-color-text">
                  754
                </b>
              </div>
              <img
                className="absolute top-[4px] left-[0px] w-[72px] h-[72px]"
                alt=""
                src="/icon.svg"
              />
            </div>
            <div className="absolute top-[0px] left-[530px] w-[162px] h-[81px]">
              <div className="absolute top-[0px] left-[104px] w-[58px] h-[81px]">
                <div className="absolute top-[0px] left-[0px]">Events</div>
                <b className="absolute top-[27px] left-[0px] text-17xl text-color-text">
                  40
                </b>
              </div>
              <div className="absolute top-[4px] left-[0px] w-[72px] h-[72px]">
                <div className="absolute top-[0px] left-[0px] rounded-21xl bg-color-yellow w-[72px] h-[72px]" />
                <img
                  className="absolute top-[16px] left-[16px] w-10 h-10 overflow-hidden"
                  alt=""
                  src="/calendar.svg"
                />
              </div>
            </div>
            <div className="absolute top-[0px] left-[796px] w-[169px] h-[81px]">
              <div className="absolute top-[0px] left-[104px] w-[65px] h-[81px]">
                <div className="absolute top-[0px] left-[0px]">Foods</div>
                <b className="absolute top-[27px] left-[0px] text-17xl text-color-text">
                  32k
                </b>
              </div>
              <div className="absolute top-[4px] left-[0px] w-[72px] h-[72px]">
                <div className="absolute top-[0px] left-[0px] rounded-21xl bg-color-text w-[72px] h-[72px]" />
                <img
                  className="absolute top-[16px] left-[16px] w-10 h-10 overflow-hidden"
                  alt=""
                  src="/food.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-[362px] left-[50px] w-[1080px] h-[479px] text-sm">
          <div className="absolute top-[0px] left-[0px] rounded-xl bg-color-white w-[1080px] h-[479px]" />
          <div className="absolute top-[32px] left-[852px] w-[196px] h-[52px]">
            <div className="absolute top-[0px] left-[106.1px] w-[89.9px] h-[52px]">
              <div className="absolute top-[4.5px] left-[0px] rounded-[50%] bg-color-white box-border w-3 h-3 border-[3px] border-solid border-color-orange" />
              <div className="absolute top-[0px] left-[19.9px] flex flex-col items-start justify-start gap-[4px]">
                <div className="relative">Last Week</div>
                <b className="relative text-lg text-color-text">1.356</b>
              </div>
            </div>
            <div className="absolute top-[0px] left-[0px] w-[90px] h-[52px]">
              <div className="absolute top-[4px] left-[0px] rounded-[50%] bg-color-white box-border w-3 h-3 border-[3px] border-solid border-color-yellow" />
              <div className="absolute top-[0px] left-[20px] flex flex-col items-start justify-start gap-[4px]">
                <div className="relative">This Week</div>
                <b className="relative text-lg text-color-text">1.245</b>
              </div>
            </div>
          </div>
          <b className="absolute top-[32px] left-[32px] text-5xl text-color-text">
            School Performance
          </b>
          <div className="absolute top-[108px] left-[33px] w-[1006px] h-[338.8px] text-lg">
            <div className="absolute top-[0px] left-[53px] w-[953px] h-[338.8px]">
              <img
                className="absolute top-[0px] left-[13px] w-[924px] h-[282px]"
                alt=""
                src="/line.svg"
              />
              <div className="absolute top-[309.8px] left-[0px] h-[29px] flex flex-row items-start justify-start gap-[50px]">
                <div className="relative">Jan</div>
                <div className="relative">Feb</div>
                <div className="relative">Mar</div>
                <div className="relative">Apr</div>
                <div className="relative">May</div>
                <div className="relative">Jun</div>
                <div className="relative text-color-text">Jul</div>
                <div className="relative">Aug</div>
                <div className="relative">Sep</div>
                <div className="relative">Oct</div>
                <div className="relative">Nov</div>
                <div className="relative">Dec</div>
              </div>
            </div>
            <img
              className="absolute top-[42.8px] left-[66px] w-[925px] h-[239.2px]"
              alt=""
              src="/chart.svg"
            />
            <div className="absolute top-[14px] left-[0px] w-[29px] h-[263px]">
              <div className="absolute top-[0px] left-[0px]">100</div>
              <div className="absolute top-[59px] left-[0px]">75</div>
              <div className="absolute top-[118px] left-[0px]">50</div>
              <div className="absolute top-[177px] left-[0px]">25</div>
              <div className="absolute top-[236px] left-[0px]">0</div>
            </div>
          </div>
        </div>
        <div className="absolute top-[881px] left-[610px] w-[520px] h-[562px] text-5xl">
          <div className="absolute top-[0px] left-[0px] rounded-xl bg-color-white w-[520px] h-[562px]" />
          <b className="absolute top-[32px] left-[32px] text-color-text">
            School Finance
          </b>
          <div className="absolute top-[110px] left-[32px] w-[453px] h-[420px] text-lg">
            <div className="absolute top-[12.5px] left-[43px] w-[410px] h-[348.5px]">
              <div className="absolute top-[0px] left-[0px] w-[410px] h-[348.5px]">
                <div className="absolute top-[347.1px] left-[0px] rounded-xl bg-color-gray-2 w-[410px] h-[1.4px]" />
                <div className="absolute top-[277.7px] left-[0px] rounded-xl bg-color-gray-2 w-[410px] h-[1.4px]" />
                <div className="absolute top-[208.3px] left-[0px] rounded-xl bg-color-gray-2 w-[410px] h-[1.4px]" />
                <div className="absolute top-[138.9px] left-[0px] rounded-xl bg-color-gray-2 w-[410px] h-[1.4px]" />
                <div className="absolute top-[69.4px] left-[0px] rounded-xl bg-color-gray-2 w-[410px] h-[1.4px]" />
                <div className="absolute top-[0px] left-[0px] rounded-xl bg-color-gray-2 w-[410px] h-[1.4px]" />
              </div>
              <img
                className="absolute top-[0px] left-[0px] w-[410px] h-[347.1px] object-contain"
                alt=""
                src="/lines@2x.png"
              />
            </div>
            <div className="absolute top-[0px] left-[0px] w-[29px] h-[373.5px]">
              <div className="absolute top-[0px] left-[0px] inline-block w-[29px] h-[25.9px]">
                100
              </div>
              <div className="absolute top-[69.1px] left-[0px] inline-block w-[23px] h-[25.9px]">
                80
              </div>
              <div className="absolute top-[138.3px] left-[0px] inline-block w-[23px] h-[25.9px]">
                60
              </div>
              <div className="absolute top-[208.3px] left-[0px] inline-block w-[23px] h-[25.9px]">
                40
              </div>
              <div className="absolute top-[276.5px] left-[0px] inline-block w-[22px] h-[25.9px]">
                20
              </div>
              <div className="absolute top-[347.5px] left-[0px] inline-block w-3 h-[25.9px]">
                0
              </div>
            </div>
            <div className="absolute top-[386.9px] left-[49px] w-[398.5px] h-[33.1px]">
              <div className="absolute top-[0px] left-[0px] inline-block w-[39px] h-[33.1px]">
                Mon
              </div>
              <div className="absolute top-[0px] left-[65.2px] inline-block w-[33px] h-[33.1px]">
                Tue
              </div>
              <div className="absolute top-[0px] left-[126.1px] text-color-text inline-block w-[41px] h-[33.1px]">
                Wed
              </div>
              <div className="absolute top-[0px] left-[192.7px] inline-block w-[33px] h-[33.1px]">
                Thu
              </div>
              <div className="absolute top-[0px] left-[253.6px] inline-block w-[21px] h-[33.1px]">
                Fri
              </div>
              <div className="absolute top-[0px] left-[305.8px] inline-block w-[30px] h-[33.1px]">
                Sat
              </div>
              <div className="absolute top-[0px] left-[364.5px] inline-block w-[34px] h-[33.1px]">
                Sun
              </div>
            </div>
            <div className="absolute top-[23px] left-[49px] w-[398px] h-[337.9px]">
              <div className="absolute top-[0px] left-[0px] w-[33.5px] h-[337.9px]">
                <div className="absolute top-[81.4px] left-[0px] rounded-t-md rounded-b-none bg-color-orange w-[15.3px] h-[256.6px]" />
                <div className="absolute top-[0px] left-[18.9px] rounded-t-md rounded-b-none bg-color-yellow w-[14.6px] h-[337.9px]" />
              </div>
              <div className="absolute top-[142.1px] left-[62.3px] w-[33.8px] h-[195.9px]">
                <div className="absolute top-[0px] left-[0px] rounded-t-md rounded-b-none bg-color-orange w-[15.2px] h-[195.9px]" />
                <div className="absolute top-[43.8px] left-[18.6px] rounded-t-md rounded-b-none bg-color-yellow w-[15.2px] h-[152.1px]" />
              </div>
              <div className="absolute top-[211px] left-[124.7px] w-[33.8px] h-[126.9px]">
                <div className="absolute top-[20.8px] left-[0px] rounded-t-md rounded-b-none bg-color-orange w-[15.2px] h-[106.1px]" />
                <div className="absolute top-[0px] left-[18.6px] rounded-t-md rounded-b-none bg-color-yellow w-[15.2px] h-[126.9px]" />
              </div>
              <div className="absolute top-[166.9px] left-[187.8px] w-[33.8px] h-[171px]">
                <div className="absolute top-[33.7px] left-[0px] rounded-t-md rounded-b-none bg-color-orange w-[15.2px] h-[137.4px]" />
                <div className="absolute top-[0px] left-[18.6px] rounded-t-md rounded-b-none bg-color-yellow w-[15.2px] h-[171px]" />
              </div>
              <div className="absolute top-[235.6px] left-[250.9px] w-[33.8px] h-[102.3px]">
                <div className="absolute top-[31px] left-[0px] rounded-t-md rounded-b-none bg-color-orange w-[15.2px] h-[71.4px]" />
                <div className="absolute top-[0px] left-[18.6px] rounded-t-md rounded-b-none bg-color-yellow w-[15.2px] h-[102.3px]" />
              </div>
              <div className="absolute top-[53.8px] left-[307.9px] w-[33.8px] h-[284.2px]">
                <div className="absolute top-[0px] left-[0px] rounded-t-md rounded-b-none bg-color-orange w-[15.2px] h-[284.2px]" />
                <div className="absolute top-[55.2px] left-[18.6px] rounded-t-md rounded-b-none bg-color-yellow w-[15.2px] h-[228.9px]" />
              </div>
              <div className="absolute top-[81.4px] left-[364.2px] w-[33.8px] h-[256.6px]">
                <div className="absolute top-[68.1px] left-[0px] rounded-t-md rounded-b-none bg-color-orange w-[15.2px] h-[188.4px]" />
                <div className="absolute top-[0px] left-[18.6px] rounded-t-md rounded-b-none bg-color-yellow w-[15.2px] h-[256.6px]" />
              </div>
            </div>
            <div className="absolute top-[99px] left-[198px] w-[103px] h-[82px] text-center text-color-white">
              <div className="relative bg-color-purple w-[103px] h-[82px]">
                <div className="absolute top-[1090px] left-[1185px] rounded-[10px] bg-color-text w-[103px] h-[73px]" />
                <img
                  className="absolute top-[1172px] left-[1231px] w-3 h-3"
                  alt=""
                />
              </div>
              <b className="absolute top-[11px] left-[34.7px]">42%</b>
              <div className="absolute top-[42px] left-[11.4px] text-sm [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)]">
                982 Income
              </div>
            </div>
          </div>
          <div className="absolute top-[36px] left-[289px] w-[196px] h-[52px] text-sm">
            <div className="absolute top-[0px] left-[106.1px] w-[89.9px] h-[52px]">
              <div className="absolute top-[4.5px] left-[0px] rounded-[50%] bg-color-white box-border w-3 h-3 border-[3px] border-solid border-color-orange" />
              <div className="absolute top-[0px] left-[19.9px] flex flex-col items-start justify-start gap-[4px]">
                <div className="relative">Last Week</div>
                <b className="relative text-lg text-color-text">1.356</b>
              </div>
            </div>
            <div className="absolute top-[0px] left-[0px] w-[90px] h-[52px]">
              <div className="absolute top-[4px] left-[0px] rounded-[50%] bg-color-white box-border w-3 h-3 border-[3px] border-solid border-color-yellow" />
              <div className="absolute top-[0px] left-[20px] flex flex-col items-start justify-start gap-[4px]">
                <div className="relative">This Week</div>
                <b className="relative text-lg text-color-text">1.245</b>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-[881px] left-[50px] w-[520px] h-[562px] text-color-text">
          <img
            className="absolute top-[0px] left-[0px] rounded-3xl w-[520px] h-[562px]"
            alt=""
            src="/background.svg"
          />
          <b className="absolute top-[32px] left-[32px] text-5xl">
            School Calendar
          </b>
          <div className="absolute top-[36px] left-[348px] w-[140px] h-[27px]">
            <div className="absolute top-[0px] left-[0px]">March 2021</div>
            <img
              className="absolute top-[2px] left-[116px] w-6 h-6 overflow-hidden"
              alt=""
              src="/dropdown.svg"
            />
          </div>
          <div className="absolute top-[160px] left-[32px] w-[455px] h-[370px]">
            <div className="absolute top-[0px] left-[0px] w-[455px] h-[74px]">
              <div className="absolute top-[0px] left-[260px] w-[65px] h-[74px]">
                <div className="absolute top-[0px] left-[0px] box-border w-[64.9px] h-[74px] flex flex-row items-center justify-center py-2.5 px-6 border-[1px] border-solid border-color-gray">
                  <div className="relative">4</div>
                </div>
                <div className="absolute top-[0px] left-[0.1px] box-border w-[64.9px] h-[74px] border-[1px] border-solid border-color-gray" />
              </div>
              <div className="absolute top-[0px] left-[0px] w-[65px] h-[74px] text-color-gray-1">
                <div className="absolute top-[0px] left-[0px] box-border w-[65px] h-[74px] flex flex-row items-center justify-center py-2.5 px-6 border-[1px] border-solid border-color-gray">
                  <div className="relative">31</div>
                </div>
                <div className="absolute top-[0px] left-[0px] box-border w-[65px] h-[74px] border-[1px] border-solid border-color-gray" />
              </div>
              <div className="absolute top-[0px] left-[65px] w-[65px] h-[74px]">
                <div className="absolute top-[0px] left-[0px] box-border w-[65px] h-[74px] flex flex-row items-center justify-center py-2.5 px-6 border-[1px] border-solid border-color-gray">
                  <div className="relative">1</div>
                </div>
                <div className="absolute top-[0px] left-[0px] box-border w-[65px] h-[74px] border-[1px] border-solid border-color-gray" />
              </div>
              <div className="absolute top-[0px] left-[130px] w-[65px] h-[74px]">
                <div className="absolute top-[0px] left-[0px] box-border w-[65px] h-[74px] flex flex-row items-center justify-center py-2.5 px-6 border-[1px] border-solid border-color-gray">
                  <div className="relative">2</div>
                </div>
                <div className="absolute top-[0px] left-[0px] box-border w-[65px] h-[74px] border-[1px] border-solid border-color-gray" />
              </div>
              <div className="absolute top-[0px] left-[195px] w-[65px] h-[74px]">
                <div className="absolute top-[0px] left-[0px] box-border w-[64.9px] h-[74px] flex flex-row items-center justify-center py-2.5 px-6 border-[1px] border-solid border-color-gray">
                  <div className="relative">3</div>
                </div>
                <div className="absolute top-[0px] left-[0.1px] box-border w-[64.9px] h-[74px] border-[1px] border-solid border-color-gray" />
              </div>
              <div className="absolute top-[0px] left-[325px] w-[65px] h-[74px]">
                <div className="absolute top-[0px] left-[0.1px] bg-color-gray box-border w-[64.9px] h-[74px] border-[1px] border-solid border-color-gray" />
                <div className="absolute top-[0px] left-[0px] box-border w-[64.9px] h-[74px] flex flex-row items-center justify-center py-2.5 px-6 border-[1px] border-solid border-color-gray">
                  <div className="relative">5</div>
                </div>
              </div>
              <div className="absolute top-[0px] left-[390px] w-[65px] h-[74px]">
                <div className="absolute top-[0px] left-[0px] box-border w-[65px] h-[74px] flex flex-row items-center justify-center py-2.5 px-6 border-[1px] border-solid border-color-gray">
                  <div className="relative">6</div>
                </div>
                <div className="absolute top-[0px] left-[0px] box-border w-[65px] h-[74px] border-[1px] border-solid border-color-gray" />
              </div>
            </div>
            <div className="absolute top-[74px] left-[0px] w-[455px] h-[74px]">
              <div className="absolute top-[0px] left-[260px] w-[65px] h-[74px]">
                <div className="absolute top-[0px] left-[0px] box-border w-[64.9px] h-[74px] flex flex-row items-center justify-center py-2.5 px-6 border-[1px] border-solid border-color-gray">
                  <div className="relative">11</div>
                </div>
                <div className="absolute top-[0px] left-[0.1px] box-border w-[64.9px] h-[74px] border-[1px] border-solid border-color-gray" />
              </div>
              <div className="absolute top-[0px] left-[0px] w-[65px] h-[74px] text-color-orange">
                <div className="absolute top-[0px] left-[0px] box-border w-[65px] h-[74px] flex flex-row items-center justify-center py-2.5 px-6 border-[1px] border-solid border-color-gray">
                  <div className="relative">7</div>
                </div>
                <div className="absolute top-[0px] left-[0px] box-border w-[65px] h-[74px] border-[1px] border-solid border-color-gray" />
              </div>
              <div className="absolute top-[0px] left-[65px] w-[65px] h-[74px] text-color-white">
                <div className="absolute top-[0px] left-[0px] box-border w-[65px] h-[74px] flex flex-row items-center justify-center py-2.5 px-6 border-[1px] border-solid border-color-gray">
                  <div className="relative w-12 h-12">
                    <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-color-purple w-12 h-12" />
                    <div className="absolute top-[11px] left-[18px]">8</div>
                  </div>
                </div>
                <div className="absolute top-[0px] left-[0px] box-border w-[65px] h-[74px] border-[1px] border-solid border-color-gray" />
              </div>
              <div className="absolute top-[0px] left-[130px] w-[65px] h-[74px]">
                <div className="absolute top-[0px] left-[0px] box-border w-[65px] h-[74px] flex flex-row items-center justify-center py-2.5 px-6 border-[1px] border-solid border-color-gray">
                  <div className="relative">9</div>
                </div>
                <div className="absolute top-[0px] left-[0px] box-border w-[65px] h-[74px] border-[1px] border-solid border-color-gray" />
              </div>
              <div className="absolute top-[0px] left-[195px] w-[65px] h-[74px]">
                <div className="absolute top-[0px] left-[0px] box-border w-[64.9px] h-[74px] flex flex-row items-center justify-center py-2.5 px-6 border-[1px] border-solid border-color-gray">
                  <div className="relative">10</div>
                </div>
                <div className="absolute top-[0px] left-[0.1px] box-border w-[64.9px] h-[74px] border-[1px] border-solid border-color-gray" />
              </div>
              <div className="absolute top-[0px] left-[325px] w-[65px] h-[74px]">
                <div className="absolute top-[0px] left-[0.1px] box-border w-[64.9px] h-[74px] border-[1px] border-solid border-color-gray" />
                <div className="absolute top-[0px] left-[0px] box-border w-[64.9px] h-[74px] flex flex-row items-center justify-center py-2.5 px-6 border-[1px] border-solid border-color-gray">
                  <div className="relative">12</div>
                </div>
              </div>
              <div className="absolute top-[0px] left-[390px] w-[65px] h-[74px]">
                <div className="absolute top-[0px] left-[0px] box-border w-[65px] h-[74px] flex flex-row items-center justify-center py-2.5 px-6 border-[1px] border-solid border-color-gray">
                  <div className="relative">13</div>
                </div>
                <div className="absolute top-[0px] left-[0px] box-border w-[65px] h-[74px] border-[1px] border-solid border-color-gray" />
              </div>
            </div>
            <div className="absolute top-[148px] left-[0px] w-[455px] h-[74px]">
              <div className="absolute top-[0px] left-[260px] w-[65px] h-[74px]">
                <div className="absolute top-[0px] left-[0px] box-border w-[64.9px] h-[74px] flex flex-row items-center justify-center py-2.5 px-6 border-[1px] border-solid border-color-gray">
                  <div className="relative">18</div>
                </div>
                <div className="absolute top-[0px] left-[0.1px] box-border w-[64.9px] h-[74px] border-[1px] border-solid border-color-gray" />
              </div>
              <div className="absolute top-[0px] left-[0px] w-[65px] h-[74px] text-color-orange">
                <div className="absolute top-[0px] left-[0px] box-border w-[65px] h-[74px] flex flex-row items-center justify-center py-2.5 px-6 border-[1px] border-solid border-color-gray">
                  <div className="relative">14</div>
                </div>
                <div className="absolute top-[0px] left-[0px] box-border w-[65px] h-[74px] border-[1px] border-solid border-color-gray" />
              </div>
              <div className="absolute top-[0px] left-[65px] w-[65px] h-[74px]">
                <div className="absolute top-[0px] left-[0px] box-border w-[65px] h-[74px] flex flex-row items-center justify-center py-2.5 px-6 border-[1px] border-solid border-color-gray">
                  <div className="relative">15</div>
                </div>
                <div className="absolute top-[0px] left-[0px] box-border w-[65px] h-[74px] border-[1px] border-solid border-color-gray" />
              </div>
              <div className="absolute top-[0px] left-[130px] w-[65px] h-[74px]">
                <div className="absolute top-[0px] left-[0px] box-border w-[65px] h-[74px] flex flex-row items-center justify-center py-2.5 px-6 border-[1px] border-solid border-color-gray">
                  <div className="relative">16</div>
                </div>
                <div className="absolute top-[0px] left-[0px] box-border w-[65px] h-[74px] border-[1px] border-solid border-color-gray" />
              </div>
              <div className="absolute top-[0px] left-[195px] w-[65px] h-[74px]">
                <div className="absolute top-[0px] left-[0px] box-border w-[64.9px] h-[74px] flex flex-row items-center justify-center py-2.5 px-6 border-[1px] border-solid border-color-gray">
                  <div className="relative">17</div>
                </div>
                <div className="absolute top-[0px] left-[0.1px] box-border w-[64.9px] h-[74px] border-[1px] border-solid border-color-gray" />
              </div>
              <div className="absolute top-[0px] left-[325px] w-[65px] h-[74px]">
                <div className="absolute top-[0px] left-[0.1px] box-border w-[64.9px] h-[74px] border-[1px] border-solid border-color-gray" />
                <div className="absolute top-[0px] left-[0px] box-border w-[64.9px] h-[74px] flex flex-row items-center justify-center py-2.5 px-6 border-[1px] border-solid border-color-gray">
                  <div className="relative">19</div>
                </div>
              </div>
              <div className="absolute top-[0px] left-[390px] w-[65px] h-[74px] text-color-white">
                <div className="absolute top-[0px] left-[0px] box-border w-[65px] h-[74px] flex flex-row items-center justify-center py-2.5 px-6 border-[1px] border-solid border-color-gray">
                  <div className="relative w-12 h-12">
                    <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-color-yellow w-12 h-12" />
                    <div className="absolute top-[11px] left-[13px]">20</div>
                  </div>
                </div>
                <div className="absolute top-[0px] left-[0px] box-border w-[65px] h-[74px] border-[1px] border-solid border-color-gray" />
              </div>
            </div>
            <div className="absolute top-[222px] left-[0px] w-[455px] h-[74px]">
              <div className="absolute top-[0px] left-[260px] w-[65px] h-[74px]">
                <div className="absolute top-[0px] left-[0px] box-border w-[64.9px] h-[74px] flex flex-row items-center justify-center py-2.5 px-6 border-[1px] border-solid border-color-gray">
                  <div className="relative">25</div>
                </div>
                <div className="absolute top-[0px] left-[0.1px] box-border w-[64.9px] h-[74px] border-[1px] border-solid border-color-gray" />
              </div>
              <div className="absolute top-[0px] left-[0px] w-[65px] h-[74px] text-color-orange">
                <div className="absolute top-[0px] left-[0px] box-border w-[65px] h-[74px] flex flex-row items-center justify-center py-2.5 px-6 border-[1px] border-solid border-color-gray">
                  <div className="relative">21</div>
                </div>
                <div className="absolute top-[0px] left-[0px] box-border w-[65px] h-[74px] border-[1px] border-solid border-color-gray" />
              </div>
              <div className="absolute top-[0px] left-[65px] w-[65px] h-[74px]">
                <div className="absolute top-[0px] left-[0px] box-border w-[65px] h-[74px] flex flex-row items-center justify-center py-2.5 px-6 border-[1px] border-solid border-color-gray">
                  <div className="relative">22</div>
                </div>
                <div className="absolute top-[0px] left-[0px] box-border w-[65px] h-[74px] border-[1px] border-solid border-color-gray" />
              </div>
              <div className="absolute top-[0px] left-[130px] w-[65px] h-[74px] text-color-white">
                <div className="absolute top-[0px] left-[0px] box-border w-[65px] h-[74px] flex flex-row items-center justify-center py-2.5 px-6 border-[1px] border-solid border-color-gray">
                  <div className="relative w-12 h-12">
                    <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-color-orange w-12 h-12" />
                    <div className="absolute top-[11px] left-[14px]">23</div>
                  </div>
                </div>
                <div className="absolute top-[0px] left-[0px] box-border w-[65px] h-[74px] border-[1px] border-solid border-color-gray" />
              </div>
              <div className="absolute top-[0px] left-[195px] w-[65px] h-[74px]">
                <div className="absolute top-[0px] left-[0px] box-border w-[64.9px] h-[74px] flex flex-row items-center justify-center py-2.5 px-6 border-[1px] border-solid border-color-gray">
                  <div className="relative">24</div>
                </div>
                <div className="absolute top-[0px] left-[0.1px] box-border w-[64.9px] h-[74px] border-[1px] border-solid border-color-gray" />
              </div>
              <div className="absolute top-[0px] left-[325px] w-[65px] h-[74px]">
                <div className="absolute top-[0px] left-[0.1px] box-border w-[64.9px] h-[74px] border-[1px] border-solid border-color-gray" />
                <div className="absolute top-[0px] left-[0px] box-border w-[64.9px] h-[74px] flex flex-row items-center justify-center py-2.5 px-6 border-[1px] border-solid border-color-gray">
                  <div className="relative">26</div>
                </div>
              </div>
              <div className="absolute top-[0px] left-[390px] w-[65px] h-[74px]">
                <div className="absolute top-[0px] left-[0px] box-border w-[65px] h-[74px] flex flex-row items-center justify-center py-2.5 px-6 border-[1px] border-solid border-color-gray">
                  <div className="relative">27</div>
                </div>
                <div className="absolute top-[0px] left-[0px] box-border w-[65px] h-[74px] border-[1px] border-solid border-color-gray" />
              </div>
            </div>
            <div className="absolute top-[296px] left-[0px] w-[455px] h-[74px] text-color-gray-1">
              <div className="absolute top-[0px] left-[260px] w-[65px] h-[74px]">
                <div className="absolute top-[0px] left-[0px] box-border w-[64.9px] h-[74px] flex flex-row items-center justify-center py-2.5 px-6 border-[1px] border-solid border-color-gray">
                  <div className="relative">1</div>
                </div>
                <div className="absolute top-[0px] left-[0.1px] box-border w-[64.9px] h-[74px] border-[1px] border-solid border-color-gray" />
              </div>
              <div className="absolute top-[0px] left-[0px] w-[65px] h-[74px] text-color-orange">
                <div className="absolute top-[0px] left-[0px] box-border w-[65px] h-[74px] flex flex-row items-center justify-center py-2.5 px-6 border-[1px] border-solid border-color-gray">
                  <div className="relative">28</div>
                </div>
                <div className="absolute top-[0px] left-[0px] box-border w-[65px] h-[74px] border-[1px] border-solid border-color-gray" />
              </div>
              <div className="absolute top-[0px] left-[65px] w-[65px] h-[74px] text-color-text">
                <div className="absolute top-[0px] left-[0px] box-border w-[65px] h-[74px] flex flex-row items-center justify-center py-2.5 px-6 border-[1px] border-solid border-color-gray">
                  <div className="relative">29</div>
                </div>
                <div className="absolute top-[0px] left-[0px] box-border w-[65px] h-[74px] border-[1px] border-solid border-color-gray" />
              </div>
              <div className="absolute top-[0px] left-[130px] w-[65px] h-[74px] text-color-text">
                <div className="absolute top-[0px] left-[0px] box-border w-[65px] h-[74px] flex flex-row items-center justify-center py-2.5 px-6 border-[1px] border-solid border-color-gray">
                  <div className="relative">30</div>
                </div>
                <div className="absolute top-[0px] left-[0px] box-border w-[65px] h-[74px] border-[1px] border-solid border-color-gray" />
              </div>
              <div className="absolute top-[0px] left-[195px] w-[65px] h-[74px] text-color-text">
                <div className="absolute top-[0px] left-[0px] box-border w-[64.9px] h-[74px] flex flex-row items-center justify-center py-2.5 px-6 border-[1px] border-solid border-color-gray">
                  <div className="relative">31</div>
                </div>
                <div className="absolute top-[0px] left-[0.1px] box-border w-[64.9px] h-[74px] border-[1px] border-solid border-color-gray" />
              </div>
              <div className="absolute top-[0px] left-[325px] w-[65px] h-[74px]">
                <div className="absolute top-[0px] left-[0.1px] box-border w-[64.9px] h-[74px] border-[1px] border-solid border-color-gray" />
                <div className="absolute top-[0px] left-[0px] box-border w-[64.9px] h-[74px] flex flex-row items-center justify-center py-2.5 px-6 border-[1px] border-solid border-color-gray">
                  <div className="relative">2</div>
                </div>
              </div>
              <div className="absolute top-[0px] left-[390px] w-[65px] h-[74px]">
                <div className="absolute top-[0px] left-[0px] box-border w-[65px] h-[74px] flex flex-row items-center justify-center py-2.5 px-6 border-[1px] border-solid border-color-gray">
                  <div className="relative">3</div>
                </div>
                <div className="absolute top-[0px] left-[0px] box-border w-[65px] h-[74px] border-[1px] border-solid border-color-gray" />
              </div>
            </div>
          </div>
          <div className="absolute top-[100px] left-[32px] w-[456px] h-[47px] text-color-gray-1">
            <div className="absolute top-[0px] left-[0px] w-[65px] flex flex-row items-center justify-center p-2.5 box-border">
              <div className="relative">Sun</div>
            </div>
            <div className="absolute top-[0px] left-[65.2px] w-[65px] flex flex-row items-center justify-center p-2.5 box-border">
              <div className="relative">Mon</div>
            </div>
            <div className="absolute top-[0px] left-[130.3px] w-[65px] flex flex-row items-center justify-center p-2.5 box-border">
              <div className="relative">Tue</div>
            </div>
            <div className="absolute top-[0px] left-[195.5px] w-[65px] flex flex-row items-center justify-center p-2.5 box-border">
              <div className="relative">Wed</div>
            </div>
            <div className="absolute top-[0px] left-[260.7px] w-[65px] flex flex-row items-center justify-center p-2.5 box-border">
              <div className="relative">Thu</div>
            </div>
            <div className="absolute top-[0px] left-[325.8px] w-[65px] flex flex-row items-center justify-center p-2.5 box-border">
              <div className="relative">Fri</div>
            </div>
            <div className="absolute top-[0px] left-[391px] w-[65px] flex flex-row items-center justify-center p-2.5 box-border">
              <div className="relative">Sat</div>
            </div>
          </div>
        </div>
        <div className="absolute top-[1483px] left-[50px] w-[1080px] h-[725px] text-5xl text-color-text">
          <div className="absolute top-[0px] left-[0px] rounded-xl bg-color-white w-[1080px] h-[725px]" />
          <b className="absolute top-[32px] left-[32px] inline-block w-[335.7px]">
            Unpaid Student Intuition
          </b>
          <div className="absolute top-[92px] left-[0px] flex flex-col items-start justify-start text-lg">
            <div className="relative w-[1080px] h-[104px]">
              <div className="absolute top-[0px] left-[0px] bg-color-white w-[1080px] h-[104px]" />
              <div className="absolute top-[28px] left-[32px] w-12 h-12">
                <div className="absolute top-[0px] left-[0px] rounded-21xl bg-color-gray-2 w-12 h-12" />
              </div>
              <div className="absolute top-[39px] left-[104px] font-semibold">
                Samantha William
              </div>
              <div className="absolute top-[39px] left-[385px] font-semibold text-color-purple">
                ID 123456789
              </div>
              <div className="absolute top-[39px] left-[800px] font-semibold text-right">
                $ 50,036
              </div>
              <div className="absolute top-[28px] left-[596px] w-[104px] h-12">
                <div className="absolute top-[0px] left-[64px] w-10 h-12">
                  <div className="absolute top-[21px] left-[0px] font-semibold">
                    VII A
                  </div>
                  <div className="absolute top-[0px] left-[0px] text-sm text-color-gray-1">
                    Class
                  </div>
                </div>
                <div className="absolute top-[0px] left-[0px] w-12 h-12">
                  <div className="absolute top-[0px] left-[0px] rounded-21xl bg-color-orange w-12 h-12" />
                  <img
                    className="absolute h-3/6 w-6/12 top-[25%] right-[25%] bottom-[25%] left-[25%] max-w-full overflow-hidden max-h-full"
                    alt=""
                    src="/user.svg"
                  />
                </div>
              </div>
              <div className="absolute top-[40px] left-[968px] w-20 h-6">
                <img
                  className="absolute top-[0px] left-[56px] w-6 h-6 overflow-hidden"
                  alt=""
                  src="/dots.svg"
                />
                <img
                  className="absolute h-full w-[30%] top-[0%] right-[70%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/print.svg"
                />
              </div>
            </div>
            <div className="relative w-[1080px] h-[104px]">
              <div className="absolute top-[0px] left-[0px] bg-color-white w-[1080px] h-[104px]" />
              <div className="absolute top-[28px] left-[32px] w-12 h-12">
                <div className="absolute top-[0px] left-[0px] rounded-21xl bg-color-gray-2 w-12 h-12" />
              </div>
              <div className="absolute top-[39px] left-[104px] font-semibold">
                Tony Soap
              </div>
              <div className="absolute top-[39px] left-[385px] font-semibold text-color-purple">
                ID 123456789
              </div>
              <div className="absolute top-[39px] left-[800px] font-semibold text-right">
                $ 50,036
              </div>
              <div className="absolute top-[28px] left-[596px] w-[104px] h-12">
                <div className="absolute top-[0px] left-[64px] w-10 h-12">
                  <div className="absolute top-[21px] left-[0px] font-semibold">
                    VII A
                  </div>
                  <div className="absolute top-[0px] left-[0px] text-sm text-color-gray-1">
                    Class
                  </div>
                </div>
                <div className="absolute top-[0px] left-[0px] w-12 h-12">
                  <div className="absolute top-[0px] left-[0px] rounded-21xl bg-color-orange w-12 h-12" />
                  <img
                    className="absolute h-3/6 w-6/12 top-[25%] right-[25%] bottom-[25%] left-[25%] max-w-full overflow-hidden max-h-full"
                    alt=""
                    src="/user.svg"
                  />
                </div>
              </div>
              <div className="absolute top-[40px] left-[968px] w-20 h-6">
                <img
                  className="absolute top-[0px] left-[56px] w-6 h-6 overflow-hidden"
                  alt=""
                  src="/dots.svg"
                />
                <img
                  className="absolute h-full w-[30%] top-[0%] right-[70%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/print.svg"
                />
              </div>
            </div>
            <div className="relative w-[1080px] h-[104px]">
              <div className="absolute top-[0px] left-[0px] bg-color-white w-[1080px] h-[104px]" />
              <div className="absolute top-[28px] left-[32px] w-12 h-12">
                <div className="absolute top-[0px] left-[0px] rounded-21xl bg-color-gray-2 w-12 h-12" />
              </div>
              <div className="absolute top-[39px] left-[104px] font-semibold">
                Jordan Nico
              </div>
              <div className="absolute top-[39px] left-[385px] font-semibold text-color-purple">
                ID 123456789
              </div>
              <div className="absolute top-[39px] left-[800px] font-semibold text-right">
                $ 50,036
              </div>
              <div className="absolute top-[28px] left-[596px] w-[104px] h-12">
                <div className="absolute top-[0px] left-[64px] w-10 h-12">
                  <div className="absolute top-[21px] left-[0px] font-semibold">
                    VII A
                  </div>
                  <div className="absolute top-[0px] left-[0px] text-sm text-color-gray-1">
                    Class
                  </div>
                </div>
                <div className="absolute top-[0px] left-[0px] w-12 h-12">
                  <div className="absolute top-[0px] left-[0px] rounded-21xl bg-color-orange w-12 h-12" />
                  <img
                    className="absolute h-3/6 w-6/12 top-[25%] right-[25%] bottom-[25%] left-[25%] max-w-full overflow-hidden max-h-full"
                    alt=""
                    src="/user.svg"
                  />
                </div>
              </div>
              <div className="absolute top-[40px] left-[968px] w-20 h-6">
                <img
                  className="absolute top-[0px] left-[56px] w-6 h-6 overflow-hidden"
                  alt=""
                  src="/dots.svg"
                />
                <img
                  className="absolute h-full w-[30%] top-[0%] right-[70%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/print.svg"
                />
              </div>
            </div>
            <div className="relative w-[1080px] h-[104px]">
              <div className="absolute top-[0px] left-[0px] bg-color-white w-[1080px] h-[104px]" />
              <div className="absolute top-[28px] left-[32px] w-12 h-12">
                <div className="absolute top-[0px] left-[0px] rounded-21xl bg-color-gray-2 w-12 h-12" />
              </div>
              <div className="absolute top-[39px] left-[104px] font-semibold">
                Karen Hope
              </div>
              <div className="absolute top-[39px] left-[385px] font-semibold text-color-purple">
                ID 123456789
              </div>
              <div className="absolute top-[39px] left-[800px] font-semibold text-right">
                $ 50,036
              </div>
              <div className="absolute top-[28px] left-[596px] w-[104px] h-12">
                <div className="absolute top-[0px] left-[64px] w-10 h-12">
                  <div className="absolute top-[21px] left-[0px] font-semibold">
                    VII A
                  </div>
                  <div className="absolute top-[0px] left-[0px] text-sm text-color-gray-1">
                    Class
                  </div>
                </div>
                <div className="absolute top-[0px] left-[0px] w-12 h-12">
                  <div className="absolute top-[0px] left-[0px] rounded-21xl bg-color-orange w-12 h-12" />
                  <img
                    className="absolute h-3/6 w-6/12 top-[25%] right-[25%] bottom-[25%] left-[25%] max-w-full overflow-hidden max-h-full"
                    alt=""
                    src="/user.svg"
                  />
                </div>
              </div>
              <div className="absolute top-[40px] left-[968px] w-20 h-6">
                <img
                  className="absolute top-[0px] left-[56px] w-6 h-6 overflow-hidden"
                  alt=""
                  src="/dots.svg"
                />
                <img
                  className="absolute h-full w-[30%] top-[0%] right-[70%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/print.svg"
                />
              </div>
            </div>
            <div className="relative w-[1080px] h-[104px]">
              <div className="absolute top-[0px] left-[0px] bg-color-white w-[1080px] h-[104px]" />
              <div className="absolute top-[28px] left-[32px] w-12 h-12">
                <div className="absolute top-[0px] left-[0px] rounded-21xl bg-color-gray-2 w-12 h-12" />
              </div>
              <div className="absolute top-[39px] left-[104px] font-semibold">
                Nadila Adja
              </div>
              <div className="absolute top-[39px] left-[385px] font-semibold text-color-purple">
                ID 123456789
              </div>
              <div className="absolute top-[39px] left-[800px] font-semibold text-right">
                $ 50,036
              </div>
              <div className="absolute top-[28px] left-[596px] w-[104px] h-12">
                <div className="absolute top-[0px] left-[64px] w-10 h-12">
                  <div className="absolute top-[21px] left-[0px] font-semibold">
                    VII A
                  </div>
                  <div className="absolute top-[0px] left-[0px] text-sm text-color-gray-1">
                    Class
                  </div>
                </div>
                <div className="absolute top-[0px] left-[0px] w-12 h-12">
                  <div className="absolute top-[0px] left-[0px] rounded-21xl bg-color-orange w-12 h-12" />
                  <img
                    className="absolute h-3/6 w-6/12 top-[25%] right-[25%] bottom-[25%] left-[25%] max-w-full overflow-hidden max-h-full"
                    alt=""
                    src="/user.svg"
                  />
                </div>
              </div>
              <div className="absolute top-[40px] left-[968px] w-20 h-6">
                <img
                  className="absolute top-[0px] left-[56px] w-6 h-6 overflow-hidden"
                  alt=""
                  src="/dots.svg"
                />
                <img
                  className="absolute h-full w-[30%] top-[0%] right-[70%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/print.svg"
                />
              </div>
            </div>
          </div>
          <div className="absolute top-[642px] left-[41px] w-[1007px] h-[51px] text-sm text-color-gray-1">
            <div className="absolute top-[13px] left-[0px]">
              <span>{`Showing `}</span>
              <span className="text-color-text">1-5</span>
              <span className="text-color-main">{` `}</span>
              <span>from</span>
              <span className="text-color-main">{` 100 `}</span>
              <span>data</span>
            </div>
            <div className="absolute top-[0px] left-[727px] flex flex-row items-center justify-start gap-[16px] text-lg">
              <img
                className="relative w-8 h-8 overflow-hidden shrink-0 object-contain"
                alt=""
                src="/dropdown@2x.png"
              />
              <div className="relative w-[50px] h-[50px] text-color-white">
                <div className="absolute top-[0px] left-[calc(50%_-_25px)] rounded-21xl bg-color-purple shadow-[0px_7px_16px_rgba(0,_0,_0,_0.14)] w-[50px] h-[50px]" />
                <div className="absolute top-[11px] left-[calc(50%_-_3px)] inline-block w-[6.9px]">
                  1
                </div>
              </div>
              <div className="relative w-[51px] h-[51px]">
                <div className="absolute top-[0px] left-[calc(50%_-_25.5px)] rounded-21xl box-border w-[51px] h-[51px] border-[2px] border-solid border-color-gray-1" />
                <div className="absolute top-[12px] left-[calc(50%_-_5.5px)] inline-block w-[10.9px]">
                  2
                </div>
              </div>
              <div className="relative w-[51px] h-[51px]">
                <div className="absolute top-[0px] left-[calc(50%_-_25.5px)] rounded-21xl box-border w-[51px] h-[51px] border-[2px] border-solid border-color-gray-1" />
                <div className="absolute top-[12px] left-[calc(50%_-_5.5px)] inline-block w-[10.9px]">
                  3
                </div>
              </div>
              <img
                className="relative w-8 h-8 overflow-hidden shrink-0 object-contain"
                alt=""
                src="/dropdown@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[0px] left-[1525px] w-[395px] h-[2310px] text-sm text-color-text">
        <div className="absolute top-[0px] left-[0px] bg-color-white w-[395px] h-[2310px]" />
        <div className="absolute top-[50px] left-[32px] w-[313px] h-[60px]">
          <div className="absolute top-[0px] left-[253px] rounded-21xl bg-color-gray-2 w-[60px] h-[60px]" />
          <div className="absolute top-[7px] left-[165px] w-16 h-[46px]">
            <div className="absolute top-[0px] left-[0px] font-semibold">
              Nabila A.
            </div>
            <div className="absolute top-[25px] left-[18px] text-color-gray-1">
              Admin
            </div>
          </div>
          <img
            className="absolute top-[0px] left-[0px] w-[60px] h-[60px]"
            alt=""
            src="/notification.svg"
          />
          <div className="absolute top-[0px] left-[80px] w-[60px] h-[60px]">
            <div className="absolute top-[0px] left-[0px] rounded-21xl bg-color-white shadow-[0px_20px_50px_rgba(191,_21,_108,_0.05)] w-[60px] h-[60px]" />
            <img
              className="absolute top-[14px] left-[14px] w-8 h-8 overflow-hidden"
              alt=""
              src="/gear.svg"
            />
          </div>
        </div>
        <div className="absolute top-[150px] left-[32px] w-[312px] h-[557px]">
          <div className="absolute top-[0px] left-[264px] w-12 h-12 text-[28px] text-color-white font-text-text-2-regular">
            <div className="absolute top-[0px] left-[0px] rounded-21xl bg-color-purple shadow-[0px_20px_50px_rgba(191,_21,_108,_0.05)] w-12 h-12" />
            <b className="absolute top-[8px] left-[16px] leading-[24px]">+</b>
          </div>
          <div className="absolute top-[0px] left-[0px] w-[202px] h-[61px] text-5xl">
            <b className="absolute top-[0px] left-[0px]">Recent Students</b>
            <div className="absolute top-[40px] left-[0px] text-sm text-color-gray-1">
              <span>{`You have `}</span>
              <span className="font-semibold">456</span>
              <span> students</span>
            </div>
          </div>
          <div className="absolute top-[96px] left-[0px] w-[312px] h-12">
            <div className="absolute top-[0px] left-[264px] w-12 h-12">
              <div className="absolute top-[0px] left-[0px] rounded-21xl bg-color-white box-border w-12 h-12 border-[2px] border-solid border-color-gray-1" />
              <img
                className="absolute top-[12px] left-[12px] w-6 h-6 overflow-hidden"
                alt=""
                src="/email.svg"
              />
            </div>
            <div className="absolute top-[1px] left-[64px] w-[134px] h-[46px]">
              <div className="absolute top-[0px] left-[0px] font-semibold">
                Samantha William
              </div>
              <div className="absolute top-[25px] left-[0px] text-color-gray-1">
                Class VII A
              </div>
            </div>
            <div className="absolute top-[0px] left-[0px] w-12 h-12">
              <div className="absolute top-[0px] left-[0px] rounded-21xl bg-color-gray-2 w-12 h-12" />
            </div>
          </div>
          <div className="absolute top-[176px] left-[0px] w-[312px] h-12">
            <div className="absolute top-[0px] left-[264px] w-12 h-12">
              <div className="absolute top-[0px] left-[0px] rounded-21xl bg-color-purple w-12 h-12" />
              <img
                className="absolute top-[12px] left-[12px] w-6 h-6 overflow-hidden"
                alt=""
                src="/email.svg"
              />
            </div>
            <div className="absolute top-[1px] left-[64px] w-[75px] h-[46px]">
              <div className="absolute top-[0px] left-[0px] font-semibold">
                Tony Soap
              </div>
              <div className="absolute top-[25px] left-[0px] text-color-gray-1">
                Class VII A
              </div>
            </div>
            <div className="absolute top-[0px] left-[0px] w-12 h-12">
              <div className="absolute top-[0px] left-[0px] rounded-21xl bg-color-gray-2 w-12 h-12" />
            </div>
          </div>
          <div className="absolute top-[256px] left-[0px] w-[312px] h-12">
            <div className="absolute top-[0px] left-[264px] w-12 h-12">
              <div className="absolute top-[0px] left-[0px] rounded-21xl bg-color-white box-border w-12 h-12 border-[2px] border-solid border-color-gray-1" />
              <img
                className="absolute top-[12px] left-[12px] w-6 h-6 overflow-hidden"
                alt=""
                src="/email.svg"
              />
            </div>
            <div className="absolute top-[1px] left-[64px] w-[83px] h-[46px]">
              <div className="absolute top-[0px] left-[0px] font-semibold">
                Karen Hope
              </div>
              <div className="absolute top-[25px] left-[0px] text-color-gray-1">
                Class VII A
              </div>
            </div>
            <div className="absolute top-[0px] left-[0px] w-12 h-12">
              <div className="absolute top-[0px] left-[0px] rounded-21xl bg-color-gray-2 w-12 h-12" />
            </div>
          </div>
          <div className="absolute top-[336px] left-[0px] w-[312px] h-12">
            <div className="absolute top-[0px] left-[264px] w-12 h-12">
              <div className="absolute top-[0px] left-[0px] rounded-21xl bg-color-white box-border w-12 h-12 border-[2px] border-solid border-color-gray-1" />
              <img
                className="absolute top-[12px] left-[12px] w-6 h-6 overflow-hidden"
                alt=""
                src="/email.svg"
              />
            </div>
            <div className="absolute top-[1px] left-[64px] w-[86px] h-[46px]">
              <div className="absolute top-[0px] left-[0px] font-semibold">
                Jordan Nico
              </div>
              <div className="absolute top-[25px] left-[0px] text-color-gray-1">
                Class VII B
              </div>
            </div>
            <div className="absolute top-[0px] left-[0px] w-12 h-12">
              <div className="absolute top-[0px] left-[0px] rounded-21xl bg-color-gray-2 w-12 h-12" />
            </div>
          </div>
          <div className="absolute top-[416px] left-[0px] w-[312px] h-12">
            <div className="absolute top-[0px] left-[264px] w-12 h-12">
              <div className="absolute top-[0px] left-[0px] rounded-21xl bg-color-white box-border w-12 h-12 border-[2px] border-solid border-color-gray-1" />
              <img
                className="absolute top-[12px] left-[12px] w-6 h-6 overflow-hidden"
                alt=""
                src="/email.svg"
              />
            </div>
            <div className="absolute top-[1px] left-[64px] w-[83px] h-[46px]">
              <div className="absolute top-[0px] left-[0px] font-semibold">
                Nadila Adja
              </div>
              <div className="absolute top-[25px] left-[0px] text-color-gray-1">
                Class VII B
              </div>
            </div>
            <div className="absolute top-[0px] left-[0px] w-12 h-12">
              <div className="absolute top-[0px] left-[0px] rounded-21xl bg-color-gray-2 w-12 h-12" />
            </div>
          </div>
          <div className="absolute top-[496px] left-[0px] w-[312px] h-[61px] text-lg text-color-purple">
            <div className="absolute top-[0px] left-[0px] rounded-21xl bg-linear-transparent-purple-10 w-[312px] h-[61px]" />
            <div className="absolute top-[17px] left-[109px] font-semibold">
              View More
            </div>
          </div>
        </div>
        <div className="absolute top-[771px] left-[32px] w-[313px] h-[505px] text-5xl">
          <b className="absolute top-[0px] left-[0px]">Messages</b>
          <div className="absolute top-[444px] left-[1px] w-[312px] h-[61px] text-lg text-color-purple">
            <div className="absolute top-[0px] left-[0px] rounded-21xl bg-linear-transparent-purple-10 w-[312px] h-[61px]" />
            <div className="absolute top-[17px] left-[109px] font-semibold">
              View More
            </div>
          </div>
          <div className="absolute top-[60px] left-[1px] w-[312px] h-[352px] text-sm">
            <div className="absolute top-[0px] left-[0px] w-[312px] h-[76px]">
              <div className="absolute top-[6px] left-[64px] w-[201px] h-[46px]">
                <div className="absolute top-[0px] left-[0px] font-semibold">
                  Samantha William
                </div>
                <div className="absolute top-[25px] left-[0px] text-color-gray-1">
                  Lorem ipsum dolor sit amet...
                </div>
              </div>
              <div className="absolute top-[5px] left-[0px] rounded-21xl bg-color-gray-2 w-12 h-12" />
              <div className="absolute top-[75.5px] left-[-0.5px] box-border w-[313px] h-px border-t-[1px] border-solid border-color-gray-1" />
              <div className="absolute top-[0px] left-[254px] text-color-gray-1">
                12:45 PM
              </div>
              <div className="absolute top-[32px] left-[278px] w-2 h-[26px] text-color-white font-text-text-2-regular">
                <div className="absolute top-[0px] left-[0px]">2</div>
              </div>
            </div>
            <div className="absolute top-[92px] left-[0px] w-[312px] h-[76px]">
              <div className="absolute top-[6px] left-[64px] w-[201px] h-[46px]">
                <div className="absolute top-[0px] left-[0px] font-semibold">
                  Tony Soap
                </div>
                <div className="absolute top-[25px] left-[0px] text-color-gray-1">
                  Lorem ipsum dolor sit amet...
                </div>
              </div>
              <div className="absolute top-[5px] left-[0px] rounded-21xl bg-color-gray-2 w-12 h-12" />
              <div className="absolute top-[75.5px] left-[-0.5px] box-border w-[313px] h-px border-t-[1px] border-solid border-color-gray-1" />
              <div className="absolute top-[0px] left-[254px] text-color-gray-1">
                12:45 PM
              </div>
              <div className="absolute top-[32px] left-[278px] w-2 h-[26px] text-color-white font-text-text-2-regular">
                <div className="absolute top-[0px] left-[0px]">2</div>
              </div>
            </div>
            <div className="absolute top-[184px] left-[0px] w-[312px] h-[76px]">
              <div className="absolute top-[6px] left-[64px] w-[201px] h-[46px]">
                <div className="absolute top-[0px] left-[0px] font-semibold">
                  Jordan Nico
                </div>
                <div className="absolute top-[25px] left-[0px] text-color-gray-1">
                  Lorem ipsum dolor sit amet...
                </div>
              </div>
              <div className="absolute top-[5px] left-[0px] rounded-21xl bg-color-gray-2 w-12 h-12" />
              <div className="absolute top-[75.5px] left-[-0.5px] box-border w-[313px] h-px border-t-[1px] border-solid border-color-gray-1" />
              <div className="absolute top-[0px] left-[254px] text-color-gray-1">
                12:45 PM
              </div>
              <div className="absolute top-[32px] left-[278px] w-2 h-[26px] text-color-white font-text-text-2-regular">
                <div className="absolute top-[0px] left-[0px]">2</div>
              </div>
            </div>
            <div className="absolute top-[276px] left-[0px] w-[312px] h-[76px]">
              <div className="absolute top-[6px] left-[64px] w-[201px] h-[46px]">
                <div className="absolute top-[0px] left-[0px] font-semibold">
                  Nadila Adja
                </div>
                <div className="absolute top-[25px] left-[0px] text-color-gray-1">
                  Lorem ipsum dolor sit amet...
                </div>
              </div>
              <div className="absolute top-[5px] left-[0px] rounded-21xl bg-color-gray-2 w-12 h-12" />
              <div className="absolute top-[75.5px] left-[-0.5px] box-border w-[313px] h-px border-t-[1px] border-solid border-color-gray-1" />
              <div className="absolute top-[0px] left-[254px] text-color-gray-1">
                12:45 PM
              </div>
              <div className="absolute top-[32px] left-[278px] w-2 h-[26px] text-color-white font-text-text-2-regular">
                <div className="absolute top-[0px] left-[0px]">2</div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-[1340px] left-[32px] w-[313px] h-[930px] text-lg text-color-main">
          <b className="absolute top-[0px] left-[0px] text-5xl">
            Current Foods Menu
          </b>
          <div className="absolute top-[869px] left-[1px] w-[312px] h-[61px] text-color-purple">
            <div className="absolute top-[0px] left-[0px] rounded-21xl bg-linear-transparent-purple-10 shadow-[0px_20px_50px_rgba(191,_21,_108,_0.05)] w-[312px] h-[61px]" />
            <div className="absolute top-[17px] left-[109px] font-semibold">
              View More
            </div>
          </div>
          <div className="absolute top-[65px] left-[1px] w-[312px] h-[236px]">
            <div className="absolute top-[0px] left-[0px] rounded-lg bg-color-gray-2 w-[312px] h-40" />
            <div className="absolute top-[184px] left-[0px] w-[254px] h-[52px]">
              <div className="absolute top-[0px] left-[0px] font-semibold">
                Beef Steak with Fried Potato
              </div>
              <div className="absolute top-[31px] left-[0px] text-sm text-color-gray-1">
                Lorem ipsum dolor sit amet...
              </div>
            </div>
          </div>
          <div className="absolute top-[333px] left-[1px] w-[312px] h-[236px]">
            <div className="absolute top-[0px] left-[0px] rounded-lg bg-color-gray-2 w-[312px] h-40" />
            <div className="absolute top-[184px] left-[0px] w-[201px] h-[52px]">
              <div className="absolute top-[0px] left-[0px] font-semibold">
                Pancake with Honey
              </div>
              <div className="absolute top-[31px] left-[0px] text-sm text-color-gray-1">
                Lorem ipsum dolor sit amet...
              </div>
            </div>
          </div>
          <div className="absolute top-[601px] left-[1px] w-[312px] h-[236px]">
            <div className="absolute top-[0px] left-[0px] rounded-lg bg-color-gray-2 w-[312px] h-40" />
            <div className="absolute top-[184px] left-[0px] w-[205px] h-[52px]">
              <div className="absolute top-[0px] left-[0px] font-semibold">
                Japanese Beef Ramen
              </div>
              <div className="absolute top-[31px] left-[0px] text-sm text-color-gray-1">
                Lorem ipsum dolor sit amet...
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
