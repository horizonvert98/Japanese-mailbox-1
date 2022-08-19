import React from 'react'
import PropTypes from 'prop-types'

SentenceSummary.propTypes = {
  data: PropTypes.object,
}

export default function SentenceSummary({data}) {
  return (
    <div className="row">
      <div className="col-md-12">
        <blockquote className="blockquote">
          <h4>
            ecotowari is an initiative to tackle the waste generated by flyers through a mailbox
            sticker.
          </h4>
        </blockquote>
        <p>
          With tests carried out all around Tokyo, we have seen reduction rates of over 99%. <br />{' '}
          <br />
          Our early supporters have received virtually 0 flyers. With a cute and efficient sticker
          working for you in the background, you know that the next time you will open your mailbox,
          it will be to see the mail that matters!
        </p>
        {/* <p>{data.content[router.locale]}</p> */}
      </div>
    </div>
  )
}