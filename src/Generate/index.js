import React, { useState } from 'react';
import './Generate.scss';
import { AiImage } from '../MockData/AiImage';

function Generate() {
  const [menu, setMenu] = useState('Standard');
  const [standard, setStandard] = useState('Speed');
  const [category, setCategory] = useState();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [select, setSelect] = useState('1'); // Initialize with '1' to set initial active state

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleSizeClick = (size) => {
    setSelect(size);
    // Additional logic if needed based on the selected size
  };

  const screen_size = [{
    Num: 1,
    size: "Size-1",
    Font: "9:16"
  }, {
    Num: 2,
    size: "Size-2",
    Font: "1:1"
  }, {
    Num: 3,
    size: "Size-3",
    Font: "16:9"
  }, {
    Num: 4,
    size: "Size-4",
    Font: "3:4"
  }, {
    Num: 5,
    size: "Size-5",
    Font: "4:3"
  }]

  return (
    <>
      <div className="generat">
        <div className="ai-generate">
          <div className="options">
            <div className="search-ai">
              <h2>Create an image from text prompt</h2>
              <input type="text" placeholder="Enter your Prompt Type" />
            </div>
            <div className="model">
              <h2>Choose a model</h2>
              <ul className="model-menu">
                <li onClick={() => setMenu('Standard')} className={menu === 'Standard' ? 'active-model' : ''}>Standard</li>
                <li onClick={() => setMenu('HD')} className={menu === 'HD' ? 'active-model' : ''}>HD</li>
                <li onClick={() => setMenu('Genius')} className={menu === 'Genius' ? 'active-model' : ''}>Genius</li>
              </ul>
            </div>
            <div className="Preference">
              <h2>Preference</h2>
              <ul className="Preference-menu">
                <li onClick={() => setStandard('Speed')} className={standard === 'Speed' ? 'active-model' : ''}>Speed</li>
                <li onClick={() => setStandard('Quality')} className={standard === 'Quality' ? 'active-model' : ''}>Quality</li>
              </ul>
            </div>

            <div className="style">
              <h2>Choose a Style</h2>
              <div className="style-main-img">
                {AiImage.map((item, i) => (
                  <img
                    onClick={() => setCategory(item.IMG)}
                    className={category === item.IMG ? 'i-active' : ''}
                    src={item.IMG}
                    alt=""
                    key={i}
                  />
                ))}
              </div>
              <button>View more style</button>
              <div className="screen-size">
                <div className="all-size" onClick={toggleDropdown}>
                  Choose Shape
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className={`bi bi-chevron-double-down ${dropdownOpen ? 'rotate' : ''}`} viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M1.646 6.646a.5.5 0 0 1 .708 0L8 12.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" />
                    <path fillRule="evenodd" d="M1.646 2.646a.5.5 0 0 1 .708 0L8 8.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" />
                  </svg>
                </div>
              </div>
              {dropdownOpen && (
                <div className="size">
                  <ul>
                    {screen_size.map((numbers) => (
                      <li
                        key={numbers.Num}
                        onClick={() => handleSizeClick(numbers.Num)}
                        className={`${numbers.size} ${select === numbers.Num ? 'drop-active' : ''}`}
                      >
                        <h6>{numbers.Font}</h6>
                      </li>
                    ))}


                  </ul>
                </div>
              )}

              <div className="generate-button">
                <button>generate</button>
              </div>
            </div>


          </div>
          <div className="generate-img">
            <div className="img-size">
              <img src={category} alt="" />
            </div>
          </div>
        </div>
      </div >
    </>
  );
}

export default Generate;
