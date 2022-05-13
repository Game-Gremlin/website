import React from 'react';
import classNames from 'classnames';
import Image from "../../elements/Image";

const FooterSocial = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'footer-social',
    className
  );

  return (
    <div
      {...props}
      className={classes}
    >
      <ul className="list-reset">
        <li>
          <a href="https://www.twitch.tv/gamegremlinio">
            <Image
                alt="Twitch"
                color="white"
                src={require("../../../assets/images/icons8-twitch.svg")}
            />
          </a>
        </li>
        <li>
          <a href="https://discord.gg/rAcs4vz7Zw">
            <Image
                alt="Discord"
                color="white"
                src={require("../../../assets/images/icons8-discord-new.svg")}
            />
          </a>
        </li>
        <li>
          <a href="https://github.com/Game-Gremlin">
            <Image
                alt="Github"
                color="white"
                src={require("../../../assets/images/icons8-github.svg")}
            />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/GameGremlinIO">
            <Image
                alt="Twitter"
                color="white"
                src={require("../../../assets/images/icons8-twitter.svg")}
            />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default FooterSocial;