import React, { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubjectChange = (e) => {
    setSubject(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleEmailClick = () => {
    const emailAddress = 'cindy8tao@gmail.com';
    const emailSubject = encodeURIComponent(subject);
    const emailBody = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    const mailtoLink = `mailto:${emailAddress}?subject=${emailSubject}&body=${emailBody}`;

    window.location.href = mailtoLink;
  };

  return (
    <div name='contact' className='w-full h-screen bg-[#e0eff4] text-gray-600'>
      {/* Container */}
      <div className='max-w-[500px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
          <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-[#E27D60]'>Contact</p>
          </div>
          <input
            type='text'
            className='w-full px-4 py-2 mb-4 rounded'
            placeholder='Name'
            value={name}
            onChange={handleNameChange}
          />
          <input
            type='email'
            className='w-full px-4 py-2 mb-4 rounded'
            placeholder='Email'
            value={email}
            onChange={handleEmailChange}
          />
          <input
            type='text'
            className='w-full px-4 py-2 mb-4 rounded'
            placeholder='Subject'
            value={subject}
            onChange={handleSubjectChange}
          />
          <textarea
            className='w-full px-4 py-4 mb-4 rounded'
            placeholder='Enter your message...'
            value={message}
            onChange={handleMessageChange}
          ></textarea>
          <button
            className='text-gray-600 border-2 hover:bg-[#E27D60] hover:border-[#E27D60] px-4 py-3 my-8 mx-auto flex items-center'
            onClick={handleEmailClick}
          >
            Send me an email!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
