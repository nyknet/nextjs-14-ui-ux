"use client";

import * as Accordion from '@radix-ui/react-accordion';
import Plus from '../../public/assets/Plus.svg';
import Image from 'next/image';

const items = [
    {
        question : 'question 1',
        answer : 'answer 1 answer 1 answer 1 answer 1 answer 1 answer 1 answer 1 answer 1 answer 1 answer 1 answer 1 '
    },
    {
        question : 'question 2',
        answer : 'answer 2 answer 2  answer 2  answer 2  answer 2  answer 2  answer 2  answer 2  answer 2  answer 2  '
    },
    {
        question : 'question 3',
        answer : 'answer 3 answer 3 answer 3 answer 3 answer 3 answer 3 answer 3 answer 3 answer 3 answer 3 '
    },
    {
        question : 'question 4',
        answer : 'answer 4 answer 4 answer 4 answer 4 answer 4 answer 4 answer 4 answer 4 answer 4 answer 4 '
    },
];

export function Faq() {
    return (
        <div className="flex flex-col w-full py-[48px] lg:py-[60px] lg:flex-row lg:gap-x-6">
            <div className='lg:w-1/3 lg:py-[32px] lg:pr-[56px]'>
                <h3 className="text-[#eb2891] text-[14px] font-medium lg:text-base">Frequently Asked Questions</h3>
                <h1 className="py-4 text-2xl font-medium text-[#172026]lg:text-[42px] lg:leading-[58px]">Lets Clarify some of your questions</h1>
                <p className="text-[#34685c] pb-[24px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing eli, de de eiusmod temopor incididut ut labore
                </p>
            </div>
            
            <div className='lg:w-2/3'>
                <Accordion.Root type="single" defaultValue="item-1" collapsible
                   /* defaultValue='item-1'
                    type='single'
                    collapsible*/
                    className='flex flex-col gap-y-4'
                >
                    {items.map((item, index) => (
                        <div key={index}>
                            <Accordion.Item
                                value={'item-${index + 1}'}
                                className='bg-[#e3f1ff] p-[16px] rounded-[8px]'
                            >
                                <Accordion.Header>
                                    <Accordion.Trigger className='flex w-full items-center justify-between'>
                                        <p className='text-center font-medium text-[#172026] lg:text-[18px]'>{item.question}</p>
                                        <span>
                                            <Image src={Plus} alt='See more' className='h-10 w-10 lg:w-6 lg:h-6' />
                                        </span>
                                    </Accordion.Trigger>
                                </Accordion.Header>
                                <Accordion.Content>
                                    <p className='pt-2 text-[#36485c]'>{item.answer}</p>
                                </Accordion.Content>
                            </Accordion.Item>
                        </div>
                    ))}
                </Accordion.Root>
            </div>
        
        </div>
    );
}