import React from 'react'

export default function LinkCard({link}) {
    return (
       <>
            <h2>Link</h2>
            <p>Your link: <a href={link.to} rel="noreferrer" target="_blank">{link.to}</a></p>
            <p>From: <a href={link.from} rel="noreferrer" target="_blank">{link.from}</a></p>
            <p>Click count: <strong>{link.clicks}</strong></p>
            <p>Created at: <strong>{new Date(link.date).toLocaleDateString()}</strong></p>
       </>
    )
}
