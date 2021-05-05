import { FC, useState } from 'react';
import { Layout, Loader } from '../comps';

interface IContact {
    name: string;
    email: string;
    message: string;
}

const InitialData: IContact = {
    name: '',
    email: '',
    message: ''
}

const CONTACT_API = process.env.NEXT_PUBLIC_CONTACT_API || `https://contact.arnabxd.workers.dev`

const Contact: FC = () => {
    const [data, setData] = useState<IContact>(InitialData);
    const [loading, setLoading] = useState<boolean>(true);

    const sendMessage = async () => {
        try {
            setLoading(true);
            let resp = await fetch(CONTACT_API, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            if (resp.status === 200) {
                setData(InitialData);
            } else {
                console.log(await resp.text());
            }
        } catch (err) {
            console.log(err)
        } finally {
            setLoading(false);
        }
    }

    return (
        <Layout>
            <div className="xd-content flex flex-wrap content-center justify-center">
                <div className="max-w-md mx-3 bg-gray-200 dark:bg-gray-900 px-5 py-4 rounded-md">
                    <input
                        name="name"
                        placeholder="Name"
                        value={data.name}
                        onChange={event => setData(prev => ({ ...prev, name: event.target.value }))}
                        className="w-full bg-gray-100 dark:bg-gray-800 placeholder-gray-800 dark:placeholder-gray-50 focus:outline-none focus:ring-1 focus:ring-primary focus:border-opacity-50 px-2 py-1 my-1 rounded-md"
                    />
                    <input
                        name="email"
                        placeholder="Email"
                        value={data.email}
                        onChange={event => setData(prev => ({ ...prev, email: event.target.value }))}
                        className="w-full bg-gray-100 dark:bg-gray-800 placeholder-gray-800 dark:placeholder-gray-50 focus:outline-none focus:ring-1 focus:ring-primary focus:border-opacity-50 px-2 py-1 my-1 rounded-md"
                    />
                    <textarea
                        name="message"
                        placeholder="Message"
                        value={data.message}
                        onChange={event => setData(prev => ({ ...prev, message: event.target.value }))}
                        rows={8}
                        className="w-full bg-gray-100 dark:bg-gray-800 placeholder-gray-800 dark:placeholder-gray-50 focus:outline-none focus:ring-1 focus:ring-primary focus:border-opacity-50 px-2 py-1 my-1 rounded-md"
                    />
                    <button
                        className="w-full bg-primary py-1 rounded-md disabled:opacity-50"
                        disabled={data.email === '' || data.name === '' || data.message === ''}
                        onClick={sendMessage}
                    >
                        <Loader className={`animate-spin mx-2 ` + (loading ? `hidden` : `inline-block`)} height={15} />
                        Send Message
                    </button>
                </div>
            </div>
        </Layout>
    )
}

export default Contact;