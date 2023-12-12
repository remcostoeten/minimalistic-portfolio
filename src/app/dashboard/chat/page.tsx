'use client';
import React, { useState, useEffect } from 'react';
import Paginate from 'react-paginate';
import { getStorage, ref, getDownloadURL } from "firebase/storage";

const MESSAGES_PER_PAGE = 10;

const ChatHistory = () => {
    const [chatHistory, setChatHistory] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);

    useEffect(() => {
        const fetchChatHistory = async () => {
            const storage = getStorage();
            const storageRef = ref(storage, 'chatHistory.json');
            const url = await getDownloadURL(storageRef);

            const response = await fetch(url);
            const data = await response.json();

            setChatHistory(data);
        };

        fetchChatHistory();
    }, []);

    const handlePageClick = ({ selected }) => {
        setCurrentPage(selected);
    };

    const pageCount = Math.ceil(chatHistory.length / MESSAGES_PER_PAGE);

    const messagesOnPage = chatHistory.slice(
        currentPage * MESSAGES_PER_PAGE,
        (currentPage + 1) * MESSAGES_PER_PAGE
    );

    return (
        <div>
            <ul>
                {messagesOnPage.map((message, index) => (
                    <li key={index}>
                        <p>{message.timestamp}</p>
                        <p>{message.name}</p>
                        <p>{message.message}</p>
                        <img src={message.image} alt="" />
                    </li>
                ))}
            </ul>
            <Paginate
                previousLabel={'previous'}
                nextLabel={'next'}
                breakLabel={'...'}
                breakClassName={'break-me'}
                pageCount={pageCount}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={handlePageClick}
                containerClassName={'pagination'}
                activeClassName={'active'}
            />
        </div>
    );
};

export default ChatHistory;