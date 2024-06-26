import React from 'react';
import networkIcon from "./assets/icons/Signal.svg";
import wifiIcon from "./assets/icons/Wifi.svg";
import batteryIcon from "./assets/icons/battery.svg";
import searchIcon from "./assets/icons/search.svg";
import bbIcon from "./assets/theme/icons/bb.jpg";
import gridApps from "./data/gridApps.json";
import gridDock from "./data/gridDock.json";

function App() {
  const [time, setTime] = React.useState({
    hours: "00",
    minutes: "00",
  })

  React.useEffect(() => {
    function getTime() {
      setInterval(() => {
        let nowHours = new Date().getHours();
        let nowMinutes = new Date().getMinutes();
        if (nowHours < 10) nowHours = "0" + nowHours;
        if (nowMinutes < 10) nowMinutes = "0" + nowMinutes;
        setTime({
          hours: nowHours,
          minutes: nowMinutes,
        });
      }, 1000);
    }

    getTime();
  }, [])

  
  return (
    <>
      <div className="phone">
        <div className="phone__screen">
          <div className="phone__screen__reflection">
            <div className="phone__screen__status-bar">
              <div className="phone__screen__time">
                {time.hours}:{time.minutes}
              </div>
              <div className="phone__screen__dynamic-island">
                <div className="phone__screen__dynamic-island__camera"></div>
              </div>
              <ul className="phone__screen__powerline-list">
                <li className="phone__screen__powerline-list__item">
                  <img src={networkIcon} className='phone__screen__powerline-list__item--icon' />
                </li>
                <li className="phone__screen__powerline-list__item">
                  <img src={wifiIcon} className='phone__screen__powerline-list__item--icon' />
                </li>
                <li className="phone__screen__powerline-list__item">
                  <img src={batteryIcon} className='phone__screen__powerline-list__item--icon' />
                </li>
              </ul>
            </div>
            <div className="phone__screen__application-grid">
              {
                gridApps.map((item, i) => (
                  <li className='phone__screen__application-grid__item' key={i}>
                    <img src={item.url} className="phone__screen__application-grid__item--icon" />
                    {item.text}
                  </li>
                ))
              }
              <li className='phone__screen__application-grid__item'>
                <img src={bbIcon} className="phone__screen__application-grid__item--icon" />
                Bloodbath
              </li>
            </div>
            <div className="phone__screen__search-bar">
              <img className="phone__screen__search-bar--icon" src={searchIcon} />
              Поиск
            </div>
            <ul className="phone__screen__dock-list">
              {
                gridDock.map((item, i) => (
                  <li className='phone__screen__dock-list__item' key={i}>
                    <img src={item.url} className="phone__screen__dock-list__item--icon" />
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
        <div className="phone__left-buttons">
          <div className="phone__volume-switch"></div>
          <div className="phone__volume-button up"></div>
          <div className="phone__volume-button down"></div>
        </div>
        <div className="phone__power-button"></div>
      </div>
    </>
  )
}

export default App;
