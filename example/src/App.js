import React from 'react'
import './index.css'
import Editor from 'saged'
import 'saged/dist/index.css'
import data from './data.json'
import useLocation from './useLocation'

const content = JSON.stringify(data)

const Switch = (path) => {
    switch (true) {
        case path === '/saged/':
            return (
                <div className='editor'>
                    <Editor content={content} />
                </div>
            )
        case path === '/saged/#preview':
            return (
                <div className='editor'>
                    <Editor content={content} readonly />
                </div>
            )
        case path === '/saged/#editor':
            return (
                <div className='editor'>
                    <Editor storageKey='saged-example-item-eerTy443' />
                </div>
            )
        case path === '/saged/#editor/preview':
            return (
                <div className='editor'>
                    <Editor
                        content={localStorage.getItem(
                            'saged-example-item-eerTy443'
                        )}
                        readonly
                    />
                </div>
            )

        default:
            return (
                <div className='notfound-container'>
                    <div className='notfound-text'>404 - Page Not Found</div>
                </div>
            )
    }
}

const App = () => {
    // const location = window.location.pathname + window.location.hash
    const [location, setLocation] = useLocation(
        window.location.pathname + window.location.hash
    )

    return (
        <div className='container'>
            {Switch(location)}
            <div className='btn-container'>
                <div
                    className='btn'
                    onClick={() => {
                        setLocation('/saged/')
                    }}
                >
                    Editor
                </div>
                <div
                    className='btn'
                    onClick={() => {
                        setLocation('#preview')
                    }}
                >
                    Preview
                </div>
            </div>
        </div>
    )
}

export default App
