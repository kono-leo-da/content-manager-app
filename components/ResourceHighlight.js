import React from 'react'
import Link from 'next/link'
import ResourceLabel from '../components/ResourceLabel'
import moment from 'moment'

const ResourceHighlight = ({resources}) => {
    return (
        <section className="hero ">
        <div className="hero-body">
          <div className="container">
            {
                resources.map(resource => {
                    return(
                        <section key={resource.id} className="section">
                <div className="columns">
                <div className="column is-8 is-offset-2">
                  <div className="content is-medium">
                    <h2 className="subtitle is-4">{moment(resource.createdAt).format("LLL")}</h2>
                    <ResourceLabel status={resource.status}/>
                    <h1 className="title">{resource.title}
                    
                    </h1>
                    <p className="mb-2">{resource.description}</p>
                    <Link href={`/resources/${resource.id}`}>
                    <a className="button is-light">Learn More</a>
                    </Link>
                  </div>
                </div>
              </div>
            </section>
                    )
                })
            }

            

            <div className="is-divider"></div>
          </div>
        </div>
      </section>
    )
}



export default ResourceHighlight