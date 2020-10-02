import React from 'react';
import Typography from '@material-ui/core/Typography';
// import Job from '../molecules';

const JobList = (props) => {
  return (
    <div className="jobList">
      <Typography
        variant="h4"
      >
        ExamIQ: Open-source AI exam question generator
      </Typography>
      <iframe src="https://ghbtns.com/github-btn.html?user=fuesco&repo=examiq&type=star&count=true&size=large" frameborder="0" scrolling="0" width="144" height="30" title="GitHub"></iframe>
    </div>
  );
}
  
export default JobList;