import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Typography from '@material-ui/core/Typography';
import Welfare from './Welfare';
import Services from './Services';
import Register from './Register';



const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return ['Register', 'Welfare', 'Services'];
}

export default function StepperForm({handleClose}) {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();
  const getStepContent = (stepIndex) => {
    switch (stepIndex) {
      case 0:
        return <Register step={stepIndex}  handleNext={handleNext} handleBack={handleBack}/>;
      case 1:
        return <Welfare handleNext={handleNext} handleBack={handleBack}/>;
      case 2:
        return <Services step={stepIndex}  handleNext={handleNext} handleClose={handleClose} handleBack={handleBack}/>;
      default:
        return;
    }
  }
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  // const handleReset = () => {
  //   setActiveStep(0);
  // };

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {/* {activeStep === steps.length-1 ? (
          <div>
            <Button onClick={handleClose}>go back</Button>
          </div>
        ) : ( */}
            <div>
              <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
            </div>
          {/* )} */}
      </div>
    </div>
  );
}
