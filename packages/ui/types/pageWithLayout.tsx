import { NextPage } from "next"
import MainLayout from "../layouts/MainLayout"
import SecondaryLayout from "../layouts/SecondaryLayout"

type PageWithMainLayoutType = NextPage & { layout: typeof MainLayout }

type PageWithPostLayoutType = NextPage & { layout: typeof SecondaryLayout }

type PageWithLayoutType = PageWithMainLayoutType | PageWithPostLayoutType

export default PageWithLayoutType
