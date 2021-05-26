import React, { useState, useEffect } from 'react'
import {
  BorderRadiusMap,
  ColorsMap,
  FontFamilyMap,
  FontSizeMap,
  FontWeightMap,
  pxToRem,
} from '../../utils/Theme'
import TextareaAutosize from 'react-textarea-autosize'
import { IconButton, makeStyles, Theme } from '@material-ui/core'
import CropOriginalIcon from '@material-ui/icons/CropOriginal'
import MoodIcon from '@material-ui/icons/Mood'
import { CircularStatic } from '../CircularProgress/CircularProgress'

export interface NewTweetSectionProps {
  avatarUrl?: string
}

export const useNewTweetSectionStyles = makeStyles((theme: Theme) => ({
  newTweetSectionWrapper: {
    padding: '0.625rem 1rem',
    borderBottom: `1px solid ${ColorsMap.borders}`,
    display: 'flex',
  },
  avatar: {
    width: '2.5rem',
    height: '2.5rem',
    borderRadius: BorderRadiusMap.buttons,
  },
  logo: {
    margin: '10px 0',
    color: ColorsMap.primary,
  },
  logoIcon: {
    fontSize: `${FontSizeMap.l}`,
  },
  textAreaWrapper: {
    width: '100%',
  },
  textarea: {
    width: '100%',
    resize: 'none',
    fontFamily: `${FontFamilyMap.default}`,
    marginTop: '0.5rem',
    marginLeft: '0.5rem',
    border: 0,
  },
  line: {
    height: '1px',
    border: 0,
    background: ColorsMap.borders,
  },
  iconsButtonWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  textareaIcons: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    width: 230,
    display: 'flex',
  },
  textareaIconsItem: {
    cursor: 'pointer',
    '&:hover': {
      '& div': {
        backgroundColor: ColorsMap.hover,
        '& h6': {
          color: ColorsMap.primary,
        },
        '& svg path': {
          fill: ColorsMap.primary,
        },
      },
    },
    '& div': {
      display: 'inline-flex',
      alignItems: 'center',
      position: 'relative',
      borderRadius: 30,
      height: 50,
      transition: 'background-color 0.1s ease-in-out',
    },
    '& button': {
      margin: 0,
    },
  },
  progressButtonWrapper: {
    display: 'flex',
    '& button': {
      backgroundColor: ColorsMap.primary,
      textColor: ColorsMap.white,
      maxWidth: pxToRem(100),
      width: '100%',
      border: 0,
      borderRadius: BorderRadiusMap.buttons,
      padding: '0.7rem',
      fontSize: FontSizeMap.s,
      fontWeight: FontWeightMap.bold,
      color: ColorsMap.white,
    },
  },
}))

export const NewTweetSection: React.FC<NewTweetSectionProps> = ({
  avatarUrl = 'https://i.picsum.photos/id/413/536/354.jpg?hmac=gWzeJ37G-MqxxyO9UpTc_dK2Bu77KvFEugYCzbdHXOA',
}) => {
  const classes = useNewTweetSectionStyles()

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
    <div className={classes.newTweetSectionWrapper}>
      <img className={classes.avatar} src={avatarUrl} alt="avatarUrl" />
      <div className={classes.textAreaWrapper}>
        <TextareaAutosize
          placeholder="Что происходит?"
          className={classes.textarea}
          onChange={(e) => setTextAreaContent(e.target.value)}
          value={textAreaContent}
        />
        <hr className={classes.line} />
        <div className={classes.iconsButtonWrapper}>
          <div>
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
          </div>
          <div className={classes.progressButtonWrapper}>
            <CircularStatic text={textAreaContent} />
            <button disabled={disabled}>Твитнуть</button>
          </div>
        </div>
      </div>
    </div>
  )
}
