import { JobCard } from "./jobCard"


export const JobsList = () => {
    const jobs = [1,2,3,4,5]
    return <div>{jobs.map(card => {
        return <JobCard />
    })}</div>
}