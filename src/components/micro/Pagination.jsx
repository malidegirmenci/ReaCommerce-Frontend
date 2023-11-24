import { Pagination, PaginationItem, PaginationLink } from "reactstrap";

export default function PaginationCmp() {
    return (
        <Pagination
            aria-label="Page navigation example"
            size="md"
        >
            <PaginationItem >
                <PaginationLink
                    first
                    href="#"
                    className="py-2.5 px-3.5  text-sm text-stone-300 bg-stone-50"
                >
                    First
                </PaginationLink>
            </PaginationItem>
            <PaginationItem>
                <PaginationLink href="#" className="p-2.5 text-sm text-white bg-[#23A6F0] ">
                    1
                </PaginationLink>
            </PaginationItem>
            <PaginationItem>
                <PaginationLink href="#" className="p-2.5 text-sm text-[#23A6F0]">
                    2
                </PaginationLink>
            </PaginationItem>
            <PaginationItem>
                <PaginationLink href="#" className="p-2.5 text-sm text-[#23A6F0]">
                    3
                </PaginationLink>
            </PaginationItem>
            <PaginationItem>
                <PaginationLink
                    href="#"
                    next
                    className="py-2.5 px-3.5 text-sm text-[#23A6F0]"
                >
                    Next
                </PaginationLink>
            </PaginationItem>
        </Pagination>
    )
}