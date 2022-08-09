import { NextPage } from "next"
import MainLayout from "../layouts/PracticeLayout"
import SecondaryLayout from "../layouts/SecondaryLayout"

type PageWithMainLayoutType = NextPage & { layout: typeof MainLayout }

type PageWithPostLayoutType = NextPage & { layout: typeof SecondaryLayout }

type PageWithLayoutType = PageWithMainLayoutType | PageWithPostLayoutType

export default PageWithLayoutType
