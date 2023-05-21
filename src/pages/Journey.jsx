import React, { useState, useEffect } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const Journey = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 1180);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 1180);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const timelineItems = [
        {
            title: 'ATPCO',
            subtitle: 'Software Engineer',
            date: 'Jan 2023 - present',
        },
        {
            title: 'Teaching Assistant',
            subtitle: 'University of Pennsylvania',
            date: 'Jan 2021 - May 2023',
        },
        {
            title: 'PPL Corporation',
            subtitle: 'Information Technology Intern',
            date: 'May 2022 - Aug 2022',
        },
        {
            title: 'Insulet Corporation',
            subtitle: 'Software Tool Intern',
            date: 'Nov 2021 - Jan 2022',
        },
    ];

    return (
        <div name="journey" className={`w-full h-[150vh] bg-[#d7f1ff] text-gray-600`}>
            <div className="max-w-[500px] mx-auto p-4 flex flex-col justify-center w-full h-full">
                <div>
                    <p className="text-4xl font-bold inline border-b-4 border-[#E27D60]">Timeline</p>
                </div>
                <VerticalTimeline>
                    {timelineItems.map((item, index) => {
                        const isEvenIndex = index % 2 === 0;
                        const marginLeft = isMobile ? '100px' : isEvenIndex ? '-180px' : '0px';
                        const marginRight = isMobile ? '100px' : isEvenIndex ? '0px' : '-180px';
                        const marginLeftArrow = isMobile ? '0px' : isEvenIndex ? '30px' : '0px';
                        const marginRightArrow = isMobile ? '30px' : isEvenIndex ? '0px' : '30px';

                        return (
                            <VerticalTimelineElement
                                key={index}
                                className="vertical-timeline-element vertical-timeline-element--work"
                                contentStyle={{
                                    background: '#E27D60',
                                    color: '#fff',
                                    marginLeft,
                                    marginRight,
                                    width: '70%',
                                    minHeight: '120px',
                                }}
                                contentArrowStyle={{
                                    borderRight: '7px solid #E27D60',
                                    marginLeft: marginLeftArrow,
                                    marginRight: marginRightArrow,
                                }}
                                iconStyle={{ background: '#E27D60', color: '#fff' }}
                            >
                                <h2 className="vertical-timeline-element-title">{item.title}</h2>
                                <h3 className="vertical-timeline-element-subtitle">{item.subtitle}</h3>
                                <p
                                    className="vertical-timeline-element-date"
                                    style={{
                                        marginTop: '0',
                                        marginLeft: isMobile ? '0px' : isEvenIndex ? '80px' : '0px',
                                        marginRight: isMobile ? '80px' : isEvenIndex ? '0px' : '80px',
                                        color: '#5085A5',
                                    }}
                                >
                                    {item.date}
                                </p>
                            </VerticalTimelineElement>
                        );
                    })}
                </VerticalTimeline>
            </div>
        </div>
    );
};

export default Journey;
