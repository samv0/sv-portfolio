import React from 'react'
import { BsTwitter, BsInstagram, BsGithub, BsLinkedin } from 'react-icons/bs'
import { FaFacebookF } from 'react-icons/fa'


const SocialMedia = () => {
  return (
    <div className='app__social'>
      <a href='https://www.linkedin.com/in/sam-vinh-3a3666187/'>
        <div>
          <BsLinkedin />
        </div>  
      </a>
      <a href='https://github.com/samv0'>
        <div>
            <BsGithub />
        </div>
      </a>
    </div>

  )
}

export default SocialMedia