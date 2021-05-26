import React, { useEffect, useState } from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'
import { makeStyles, Theme } from '@material-ui/core'
import { ColorsMap, FontSizeMap } from '../../utils/Theme'
import classNames from 'classnames'
export interface CircularStaticProps {
  text: string
}

interface CircularProgressWithLabelProps {
  value: number
}

export const useCircularStyles = makeStyles((theme: Theme) => ({
  circularProgressBox: {
    width: '1.9rem',
    height: '1.9rem',
    position: 'relative',
    display: 'inline-flex',
    '& .MuiCircularProgress-root': {
      color: ColorsMap.primary,
    },
  },
  error: {
    '& .MuiCircularProgress-root': {
      color: ColorsMap.error,
    },
  },
  warning: {
    '& .MuiCircularProgress-root': {
      color: ColorsMap.warning,
    },
  },
  textWrapper: {
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '& p': {
      fontSize: FontSizeMap.s,
      margin: ' 0.8rem 0.65rem 0 0',
      textColor: ColorsMap.secondary,
    },
  },
}))

const CircularProgressWithLabel: React.FC<CircularProgressWithLabelProps> = ({ value }) => {
  const classes = useCircularStyles()
  const [percent, setPercent] = useState<number>(100)

  useEffect(() => {
    if (value < 280) {
      setPercent((value / 280) * 100)
    }
  }, [value])

  return (
    <div
      className={
        value >= 280
          ? classNames(classes.error, classes.circularProgressBox)
          : value > 260
          ? classNames(classes.warning, classes.circularProgressBox)
          : classes.circularProgressBox
      }
    >
      <CircularProgress variant="determinate" value={Math.round(percent)} />
      <div className={classes.textWrapper}>
        <p>{value >= 280 ? `${280 - value}` : value > 260 ? `${280 - value}` : ''}</p>
      </div>
    </div>
  )
}

export const CircularStatic: React.FC<CircularStaticProps> = ({ text }) => {
  const [progress, setProgress] = React.useState(0)

  React.useEffect(() => {
    setProgress(text.length)
  }, [text])

  return <CircularProgressWithLabel value={progress} />
}
