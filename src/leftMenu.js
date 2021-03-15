import React, { Component } from "react";
import { menuItems } from "./database";
import Link from "react-router-dom/Link";
import { Title } from "./bodyTitle";

class LeftMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: true
    };
  }
  render() {
    let { onMenuClicked, current } = this.props;
    return (
      <div className="leftMenu ">
        <div className="container ">
          <div className="menu-header menu-block">
            <i
              class={`material-icons responsive white`}
              onClick={e => {
                this.setState({
                  collapsed: !this.state.collapsed
                });
              }}
            >
              {" "}
              horizontal_split{" "}
            </i>
            <Title title="NAVIGATION" />
          </div>

          <div className="menu-body">
            {!this.state.collapsed ? (
              undefined
            ) : (
              <ol className="menuItems">
                {menuItems.map((item, index) => (
                  <li
                    className={item == current ? "selected" : "non-selected"}
                    key={index}
                  >
                    <Link
                      to={`/${item.name}`}
                      onClick={e => {
                        onMenuClicked(item);
                      }}
                    >
                      <i class="material-icons vertical-align">{item.icon}</i>{" "}
                      {item.name}
                    </Link>{" "}
                  </li>
                ))}
              </ol>
            )}
          </div>
        </div>

        <div className="reach_out container">
          <Title title="LINKS" />
          <p className="see-block">
            <a href="https://www.linkedin.com/in/bikeshmdr/" target="_blank">
              <img
                className="vertical-align"
                src="/linkedIn.png"
                alt="linkedIn"
              />{" "}
              LinkedIn{" "}
            </a>
          </p>
          <p className="see-block">
            <a href="https://github.com/probikeshmdr" target="_blank">
              <img className="vertical-align" src="/gitHub.png" alt="github" />{" "}
              GitHub{" "}
            </a>
          </p>
        </div>
      </div>
    );
  }
}

export { LeftMenu };
