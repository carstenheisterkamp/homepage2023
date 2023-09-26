import PageTemplate from "../components/PageTemplate"
import { pageContent } from '../data/content'

export default function HomePage() {
    const content = pageContent.homepage
    return (
        <PageTemplate title={content.title} subtitle={content.subtitle} intro={content.intro}/>
    )
}