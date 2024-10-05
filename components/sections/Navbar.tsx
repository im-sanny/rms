import React from 'react'
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function navbar() {
    return (
        <div>
            <nav className="py-5 flex justify-center mx-auto bg-slate-400">
                <ul className="flex gap-5">
                    <li>
                        <Button>
                            <Link href={'/'}>Home</Link>
                        </Button>
                    </li>
                    <li>
                        <Button>
                            <Link href={'/login'}>Login</Link>
                        </Button>
                    </li>
                    <li>
                        <Button>
                            <Link href={'/register'}>Register</Link>
                        </Button>
                    </li>
                </ul>
            </nav>
            <hr />
        </div>
    )
}
