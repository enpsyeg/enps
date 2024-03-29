import React from 'react'
import { Link } from 'gatsby'
import PortableTextHandler from '../PortableTextHandler'
import { format } from 'date-fns'

import { MdEventAvailable } from 'react-icons/md'
import { FaLongArrowAltRight } from 'react-icons/fa'
import { AiOutlineForm } from 'react-icons/ai'

export default function EventCard({path, title, excerpt, date, location}) {
    

    return (
        <aside className='card'>
            <div className="card__header">
                <MdEventAvailable/>
                {date && (
                        <p className='card__date'>
                            {format(new Date(date), "MMMM dd, yyyy, p")}
                        </p>
                    )}
            </div>
            <div className="card__body">
                <div className="card__title">
                    <h4>{title}</h4>
                    <h5><b>Location:</b> {location}</h5>
                </div>
                <div className="card__content">
                    <PortableTextHandler value={excerpt}/>
                </div>
                <div className="card__links">
                    <Link to={`/events/${path}`}>View Event <FaLongArrowAltRight className='arrowIcon'/></Link>
                </div>
            </div>
        </aside>
    )
}
