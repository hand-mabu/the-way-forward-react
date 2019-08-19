import React, { useState } from 'react';
import axios from '@Axios';

export default function Example() {
    const [url, setUrl] = useState('http://localhost:3000/crawler');
    const [select, setSelect] = useState('ul li a');
    const [content, setContent] = useState([]);

    const getData = () => {
        if (!select || !select) return;

        axios.get('/crawler/content', {
            params: {
                select,
                url: decodeURIComponent(url),
            }
        }).then(res => {
            setContent(res);
        });
    }

    return (
        <div style={{
            display: 'flex',
            padding: '20px 200px'
        }}>
            <div style={{
                width: '300px',
            }}>
                <div>url: <input type="text" value={url} onChange={e => setUrl(e.target.value)} /></div>
                <div>selector: <input type="text" value={select} onChange={e => setSelect(e.target.value)} /></div>
                <button onClick={getData}>确认</button>
            </div>
            <div style={{
                flex: 1,
            }}>
                {content.map((c, index) => (
                    <div
                        style={{
                            marginBottom: '4px',
                            padding: '4px 10px',
                            border: '1px solid #9E9E9E',
                        }}
                        key={index}
                    >{c}</div>
                ))}
            </div>
        </div>
    );
}