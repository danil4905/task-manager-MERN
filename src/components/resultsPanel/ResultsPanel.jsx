import classes from "./resultsPanel.module.scss";

const ResultsPanel = () => {
  return (
    <section className={classes.contentPanel}>
      <section className={classes.resultsWrap}></section>
      <section className={classes.commentsWrap}></section>
    </section>
  );
};

export default ResultsPanel;
