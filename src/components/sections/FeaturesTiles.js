import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}
const FeaturesTiles = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {

  const outerClasses = classNames(
    'features-tiles section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-tiles-inner section-inner pt-0',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap center-content',
    pushLeft && 'push-left'
  );

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <div className={tilesClasses}>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <span role="img" aria-labelledby="feature-game-controller" style={{fontSize: "64pt"}}>
                    🎮
                  </span>
                </div>
                <div className="features-tiles-item-content">
                  <h4 id="feature-game-controller" className="mt-0 mb-8">
                    Game Controller
                    </h4>
                  <p className="m-0 text-sm">
                    Disable buttons or press button combinations, customizable for the game you're playing.
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <span role="img" aria-labelledby="feature-audio" style={{fontSize: "64pt"}}>
                    🔊
                  </span>
                </div>
                <div className="features-tiles-item-content">
                  <h4 id="feature-audio" className="mt-0 mb-8">
                    Audio
                    </h4>
                  <p className="m-0 text-sm">
                    Play sounds on viewer command or when buttons are pressed on the game controller.
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="400">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <span role="img" aria-labelledby="feature-video" style={{fontSize: "64pt"}}>
                    📺
                  </span>
                </div>
                <div className="features-tiles-item-content">
                  <h4 id="feature-video" className="mt-0 mb-8">
                    Video
                    </h4>
                  <p className="m-0 text-sm">
                    Play video clips, with green screen support, over your screen as an obstruction.
                    </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

FeaturesTiles.propTypes = propTypes;
FeaturesTiles.defaultProps = defaultProps;

export default FeaturesTiles;