import React, { useEffect, useState } from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'
import Box from '@material-ui/core/Box'
import { makeStyles, Theme } from '@material-ui/core'
import { ColorsMap, FontSizeMap } from '../../utils/Theme'
import { Text } from '../Text'

export interface CircularStaticProps {
  text: string
}

interface CircularProgressWithLabelProps {
  value: number
}

export const useStyles = makeStyles((theme: Theme) => ({
  circularProgressBox: {
    width: '1.9rem',
    height: '1.9rem',
    '& .MuiCircularProgress-root': {
      color: ColorsMap.primary,
    },
  },
  circularProgressBoxError: {
    width: '1.9rem',
    height: '1.9rem',
    '& .MuiCircularProgress-root': {
      color: ColorsMap.error,
    },
  },
  circularProgressBoxWarning: {
    width: '1.9rem',
    height: '1.9rem',
    '& .MuiCircularProgress-root': {
      color: ColorsMap.warning,
    },
  },
}))

const CircularProgressWithLabel: React.FC<CircularProgressWithLabelProps> = ({ value }) => {
  const classes = useStyles()
  const [percent, setPercent] = useState<number>(100)

  useEffect(() => {
    if (value < 280) {
      setPercent((value / 280) * 100)
    }
  }, [value])

  return (
    <Box
      position="relative"
      display="inline-flex"
      className={
        value >= 280
          ? classes.circularProgressBoxError
          : value > 260
          ? classes.circularProgressBoxWarning
          : classes.circularProgressBox
      }
    >
      <CircularProgress variant="determinate" value={Math.round(percent)} />
      <Box
        top={0}
        left={0}
        bottom={0}
        right={0}
        position="absolute"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Text fontSize={FontSizeMap.s} mt="0.8rem" mr="0.65rem" textColor={ColorsMap.secondary}>
          {value >= 280 ? `${280 - value}` : value > 260 ? `${280 - value}` : ''}
        </Text>
      </Box>
    </Box>
  )
}

export const CircularStatic: React.FC<CircularStaticProps> = ({ text }) => {
  const [progress, setProgress] = React.useState(0)

  React.useEffect(() => {
    setProgress(text.length)
  }, [text])

  return <CircularProgressWithLabel value={progress} />
}
