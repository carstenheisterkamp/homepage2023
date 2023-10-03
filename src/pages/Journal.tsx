import PageTemplate from "../components/PageTemplate"
import { pageContent } from "../data/content"

export default function JournalPage() {
    return (
        <PageTemplate title={pageContent.journalpage.title} subtitle={pageContent.journalpage.subtitle} intro={pageContent.journalpage.intro}>
            <div className="grid grid-cols-2 gap-2 pointer-events-none">
                <div>
                    <p>Content!</p>
                </div>
                <div>
                    <p>Content!</p>
                </div>
                <div>
                    <p>Content!</p>
                </div>
                <div>
                    <p>Content!</p>
                </div>
            </div>
        </PageTemplate>
    )
}