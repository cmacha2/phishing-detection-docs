import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Cutting-edge AI Models',
    Svg: require('@site/static/img/ai_models.svg').default,
    description: (
      <>
        Leverage state-of-the-art machine learning models from Hugging Face to
        detect phishing attempts in both URLs and emails with unparalleled accuracy.
      </>
    ),
  },
  {
    title: 'Developer Friendly',
    Svg: require('@site/static/img/dev_friendly.svg').default,
    description: (
      <>
        Designed with developers in mind, our API makes it seamless to integrate phishing detection into your applications.
      </>
    ),
  },
  {
    title: 'Batch Processing Support',
    Svg: require('@site/static/img/batch_processing.svg').default,
    description: (
      <>
        Handle large datasets efficiently with our batch processing capabilities, saving time and effort in detecting threats at scale.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
