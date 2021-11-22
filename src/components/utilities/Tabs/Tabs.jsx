import React, { useState } from "react";
import "./Tabs.css";

const Tabs = ({ labels, activeTabIndex, stackpoint, children, onTabSwitch }) => {
  // props validation
  activeTabIndex =
    activeTabIndex > labels.length - 1 ? labels.length - 1 : activeTabIndex;
  activeTabIndex = activeTabIndex < 0 ? 0 : activeTabIndex;
  
  if(labels.length !== children.length){
    throw Error('number of labels and tab compents not equal');
  }

  const [activeTab, setActiveTab] = useState(activeTabIndex ?? 0);
  const activeClass = "active";

  const queryCSS = `
    @media screen and (max-width: ${stackpoint}px){
      .tabs__buttons{
        flex-direction: column;
        text-align: center;
      }

      .tabs__button{
        width: 100%;
      }
    }
  `

  const changeTabs = ({ target }) => {
    onTabSwitch && onTabSwitch(target.dataset.index, activeTab);
    setActiveTab(parseInt(target.dataset.index));
  };

  const next = () => {
    setActiveTab(prevState => ++prevState);
  }

  const prev = () => {
    setActiveTab(prevState => --prevState);
  }



  return (
    <div class="tabs">
      <div class="tabs__buttons">
        {labels.map((tab, i) => (
          <div
            class={`tabs__button ${i === +activeTab ? activeClass : ""}`}
            onClick={changeTabs}
            data-index={i}
            key={i}
          >
            {tab}
          </div>
        ))}
      </div>
      <div class="tabs__contents">
        <div>{React.cloneElement(children[activeTab], {next, prev})}</div>
      </div>
      <style>
        {queryCSS}
      </style>
    </div>
  );
};

export default Tabs;

// tabs = [{
//     label: 'label1',
//     Component: 'Component'
// }]
