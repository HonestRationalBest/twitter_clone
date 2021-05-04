import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import {
  BorderRadiusMap,
  ColorsMap,
  FontFamilyMap,
  FontSizeMap,
  FontWeightMap,
  pxToRem,
} from '../../utils/Theme'
import TextareaAutosize from 'react-textarea-autosize'
import { Box } from '../Box'
import { useHomeStyles } from '../../pages/Home/Home'
import { CircularProgress, IconButton } from '@material-ui/core'
import CropOriginalIcon from '@material-ui/icons/CropOriginal'
import MoodIcon from '@material-ui/icons/Mood'
import { Button } from '../Button'
import { CircularStatic } from '../CircularProgress/CircularProgress'

export interface NewTweetSectionProps {
  avatarUrl?: string
  classes: ReturnType<typeof useHomeStyles>
}

const Avatar = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: ${BorderRadiusMap.buttons};
`

const Line = styled.hr`
  height: 1px;
  border: 0;
  background: ${ColorsMap.borders};
`

export const NewTweetSection: React.FC<NewTweetSectionProps> = ({
  avatarUrl = 'https://i.picsum.photos/id/413/536/354.jpg?hmac=gWzeJ37G-MqxxyO9UpTc_dK2Bu77KvFEugYCzbdHXOA',
  classes,
}) => {
  const [disabled, setDisbled] = useState<boolean>(false)
  const [textAreaContent, setTextAreaContent] = useState<string>('')

  useEffect(() => {
    if (textAreaContent.length > 280) {
      setDisbled(true)
    } else {
      setDisbled(false)
    }
  }, [textAreaContent])
  return (
    <Box
      p="0.625rem 1rem"
      borderBottom="1px solid #000"
      borderBottomColor={ColorsMap.borders}
      display="flex"
    >
      <Avatar src={avatarUrl} alt="avatarUrl" />
      <Box width="100%">
        <TextareaAutosize
          placeholder="Что происходит?"
          className={classes.textarea}
          onChange={(e) => setTextAreaContent(e.target.value)}
        />
        <Line />
        <Box display="flex" alignItems="center" justifyContent="space-between" width="100%">
          <Box>
            <ul className={classes.textareaIcons}>
              <li className={classes.textareaIconsItem}>
                <IconButton className={classes.logo} aria-label="">
                  <CropOriginalIcon className={classes.logoIcon} />
                </IconButton>
              </li>
              <li className={classes.textareaIconsItem}>
                <IconButton className={classes.logo} aria-label="">
                  <MoodIcon className={classes.logoIcon} />
                </IconButton>
              </li>
            </ul>
          </Box>
          <Box display="flex">
            <CircularStatic text={textAreaContent} />
            <Button
              backgroundColor={ColorsMap.primary}
              textColor={ColorsMap.white}
              maxWidth={pxToRem(100)}
              width="100%"
              border="0"
              borderRadius={BorderRadiusMap.buttons}
              p="0.7rem"
              fontSize={FontSizeMap.s}
              fontWeight={FontWeightMap.bold}
              disabled={disabled}
            >
              Твитнуть
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
