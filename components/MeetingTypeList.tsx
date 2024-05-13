'use client'

import Image from 'next/image'
import React, { useState } from 'react'
import HomeCard from './HomeCard'
import { useRouter } from 'next/navigation'
import MeetingModal from './MeetingModal'

const MeetingTypeList = () => {
    const router = useRouter();
    const [meetingState, setMeetingState] = useState<'isScheduleMeeting' | 'isJoiningMeeting' | 'isInstantMeeting' | undefined>();

    const createMeeting = () => {}

    return (
        <section className='grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4'>
            <HomeCard
                img='/icons/add-meeting.svg'
                className='bg-orange-1'
                title='New Meeting'
                description='Start an instant meeting'
                handleClick={() => setMeetingState('isInstantMeeting')}
            />
            <HomeCard
                img='/icons/schedule.svg'
                className='bg-blue-1'
                title='Schedule Meeting'
                description='Plan your meeting'
                handleClick={() => setMeetingState('isScheduleMeeting')}
            /><HomeCard
                img='/icons/recordings.svg'
                className='bg-purple-1'
                title='View Recordings'
                description='Check out your recordings'
                handleClick={() => setMeetingState('isJoiningMeeting')}
            /><HomeCard
                img='/icons/join-meeting.svg'
                className='bg-yellow-1'
                title='Join Meeting'
                description='via invitation link'
                handleClick={() => setMeetingState('isJoiningMeeting')}
            /> 


            <MeetingModal
                isOpen={meetingState === 'isInstantMeeting'}
                onClose={() => setMeetingState(undefined)}
                title="Start an Instant Meeting"
                className="text-center"
                buttonText="Start Meeting"
                handleClick={createMeeting}
            />
        </section>
    )
}

export default MeetingTypeList
