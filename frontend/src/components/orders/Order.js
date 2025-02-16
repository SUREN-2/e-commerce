 function Order(){
    return(
        <div class="space-y-4">
    <div class="flex items-center justify-between">
        <div class="flex flex-1 items-center space-x-2">
            <input
                class="flex rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm h-8 w-[150px] lg:w-[250px]"
                placeholder="Filter tasks..."
                value=""
            />
            <button
                class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground rounded-md px-3 text-xs h-8 border-dashed"
                type="button"
                aria-haspopup="dialog"
                aria-expanded="false"
                aria-controls="radix-:r38n:"
                data-state="closed"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-plus">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M8 12h8"></path>
                    <path d="M12 8v8"></path>
                </svg>
                Status
            </button>
            <button
                class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground rounded-md px-3 text-xs h-8 border-dashed"
                type="button"
                aria-haspopup="dialog"
                aria-expanded="false"
                aria-controls="radix-:r38o:"
                data-state="closed"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-plus">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M8 12h8"></path>
                    <path d="M12 8v8"></path>
                </svg>
                Priority
            </button>
        </div>
        <button
            class="items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground rounded-md px-3 text-xs ml-auto hidden h-8 lg:flex"
            type="button"
            id="radix-:r38p:"
            aria-haspopup="menu"
            aria-expanded="false"
            data-state="closed"
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-settings2">
                <path d="M20 7h-9"></path>
                <path d="M14 17H5"></path>
                <circle cx="17" cy="17" r="3"></circle>
                <circle cx="7" cy="7" r="3"></circle>
            </svg>
            View
        </button>
    </div>
    <div class="rounded-md border">
        <div class="relative w-full overflow-auto">
            <table class="w-full caption-bottom text-sm">
                <thead class="[&amp;_tr]:border-b">
                    <tr class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                        <th class="h-10 px-2 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px]" colspan="1">
                            <button
                                type="button"
                                role="checkbox"
                                aria-checked="false"
                                data-state="unchecked"
                                value="on"
                                class="peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground translate-y-[2px]"
                                aria-label="Select all"
                            ></button>
                        </th>
                        <th class="h-10 px-2 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px]" colspan="1"><div class="">Task</div></th>
                        <th class="h-10 px-2 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px]" colspan="1">
                            <div class="flex items-center space-x-2">
                                <button
                                    class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground rounded-md px-3 text-xs -ml-3 h-8 data-[state=open]:bg-accent"
                                    type="button"
                                    id="radix-:r38r:"
                                    aria-haspopup="menu"
                                    aria-expanded="false"
                                    data-state="closed"
                                >
                                    <span>Title</span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        class="lucide lucide-chevrons-up-down"
                                    >
                                        <path d="m7 15 5 5 5-5"></path>
                                        <path d="m7 9 5-5 5 5"></path>
                                    </svg>
                                </button>
                            </div>
                        </th>
                        <th class="h-10 px-2 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px]" colspan="1">
                            <div class="flex items-center space-x-2">
                                <button
                                    class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground rounded-md px-3 text-xs -ml-3 h-8 data-[state=open]:bg-accent"
                                    type="button"
                                    id="radix-:r38t:"
                                    aria-haspopup="menu"
                                    aria-expanded="false"
                                    data-state="closed"
                                >
                                    <span>Status</span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        class="lucide lucide-chevrons-up-down"
                                    >
                                        <path d="m7 15 5 5 5-5"></path>
                                        <path d="m7 9 5-5 5 5"></path>
                                    </svg>
                                </button>
                            </div>
                        </th>
                        <th class="h-10 px-2 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px]" colspan="1">
                            <div class="flex items-center space-x-2">
                                <button
                                    class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground rounded-md px-3 text-xs -ml-3 h-8 data-[state=open]:bg-accent"
                                    type="button"
                                    id="radix-:r38v:"
                                    aria-haspopup="menu"
                                    aria-expanded="false"
                                    data-state="closed"
                                >
                                    <span>Priority</span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        class="lucide lucide-chevrons-up-down"
                                    >
                                        <path d="m7 15 5 5 5-5"></path>
                                        <path d="m7 9 5-5 5 5"></path>
                                    </svg>
                                </button>
                            </div>
                        </th>
                        <th class="h-10 px-2 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px]" colspan="1"></th>
                    </tr>
                </thead>
                <tbody class="[&amp;_tr:last-child]:border-0">
                    <tr class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted" data-state="false">
                        <td class="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px]">
                            <button
                                type="button"
                                role="checkbox"
                                aria-checked="false"
                                data-state="unchecked"
                                value="on"
                                class="peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground translate-y-[2px]"
                                aria-label="Select row"
                            ></button>
                        </td>
                        <td class="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px]"><div class="w-[80px]">TASK-8782</div></td>
                        <td class="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px]">
                            <div class="flex space-x-2">
                                <div class="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground">
                                    Documentation
                                </div>
                                <span class="max-w-[500px] truncate font-medium">You can't compress the program without quantifying the open-source SSD pixel!</span>
                            </div>
                        </td>
                        <td class="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px]">
                            <div class="flex w-[100px] items-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    class="lucide lucide-timer mr-2 h-4 w-4 text-muted-foreground"
                                >
                                    <line x1="10" x2="14" y1="2" y2="2"></line>
                                    <line x1="12" x2="15" y1="14" y2="11"></line>
                                    <circle cx="12" cy="14" r="8"></circle>
                                </svg>
                                <span>In Progress</span>
                            </div>
                        </td>
                        <td class="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px]">
                            <div class="flex items-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    class="lucide lucide-arrow-right mr-2 h-4 w-4 text-muted-foreground"
                                >
                                    <path d="M5 12h14"></path>
                                    <path d="m12 5 7 7-7 7"></path>
                                </svg>
                                <span>Medium</span>
                            </div>
                        </td>
                        <td class="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px]">
                            <button
                                class="items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground flex h-8 w-8 p-0 data-[state=open]:bg-muted"
                                type="button"
                                id="radix-:r391:"
                                aria-haspopup="menu"
                                aria-expanded="false"
                                data-state="closed"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    class="lucide lucide-ellipsis"
                                >
                                    <circle cx="12" cy="12" r="1"></circle>
                                    <circle cx="19" cy="12" r="1"></circle>
                                    <circle cx="5" cy="12" r="1"></circle>
                                </svg>
                                <span class="sr-only">Open menu</span>
                            </button>
                        </td>
                    </tr>
                    <tr class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted" data-state="false">
                        <td class="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px]">
                            <button
                                type="button"
                                role="checkbox"
                                aria-checked="false"
                                data-state="unchecked"
                                value="on"
                                class="peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground translate-y-[2px]"
                                aria-label="Select row"
                            ></button>
                        </td>
                        <td class="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px]"><div class="w-[80px]">TASK-7878</div></td>
                        <td class="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px]">
                            <div class="flex space-x-2">
                                <div class="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground">
                                    Documentation
                                </div>
                                <span class="max-w-[500px] truncate font-medium">Try to calculate the EXE feed, maybe it will index the multi-byte pixel!</span>
                            </div>
                        </td>
                        <td class="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px]">
                            <div class="flex w-[100px] items-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    class="lucide lucide-circle-help mr-2 h-4 w-4 text-muted-foreground"
                                >
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                                    <path d="M12 17h.01"></path>
                                </svg>
                                <span>Backlog</span>
                            </div>
                        </td>
                        <td class="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px]">
                            <div class="flex items-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    class="lucide lucide-arrow-right mr-2 h-4 w-4 text-muted-foreground"
                                >
                                    <path d="M5 12h14"></path>
                                    <path d="m12 5 7 7-7 7"></path>
                                </svg>
                                <span>Medium</span>
                            </div>
                        </td>
                        <td class="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px]">
                            <button
                                class="items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground flex h-8 w-8 p-0 data-[state=open]:bg-muted"
                                type="button"
                                id="radix-:r393:"
                                aria-haspopup="menu"
                                aria-expanded="false"
                                data-state="closed"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    class="lucide lucide-ellipsis"
                                >
                                    <circle cx="12" cy="12" r="1"></circle>
                                    <circle cx="19" cy="12" r="1"></circle>
                                    <circle cx="5" cy="12" r="1"></circle>
                                </svg>
                                <span class="sr-only">Open menu</span>
                            </button>
                        </td>
                    </tr>
                    <tr class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted" data-state="false">
                        <td class="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px]">
                            <button
                                type="button"
                                role="checkbox"
                                aria-checked="false"
                                data-state="unchecked"
                                value="on"
                                class="peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground translate-y-[2px]"
                                aria-label="Select row"
                            ></button>
                        </td>
                        <td class="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px]"><div class="w-[80px]">TASK-7839</div></td>
                        <td class="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px]">
                            <div class="flex space-x-2">
                                <div class="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground">Bug</div>
                                <span class="max-w-[500px] truncate font-medium">We need to bypass the neural TCP card!</span>
                            </div>
                        </td>
                        <td class="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px]">
                            <div class="flex w-[100px] items-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    class="lucide lucide-circle mr-2 h-4 w-4 text-muted-foreground"
                                >
                                    <circle cx="12" cy="12" r="10"></circle>
                                </svg>
                                <span>Todo</span>
                            </div>
                        </td>
                        <td class="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px]">
                            <div class="flex items-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    class="lucide lucide-arrow-up mr-2 h-4 w-4 text-muted-foreground"
                                >
                                    <path d="m5 12 7-7 7 7"></path>
                                    <path d="M12 19V5"></path>
                                </svg>
                                <span>High</span>
                            </div>
                        </td>
                        <td class="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px]">
                            <button
                                class="items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground flex h-8 w-8 p-0 data-[state=open]:bg-muted"
                                type="button"
                                id="radix-:r395:"
                                aria-haspopup="menu"
                                aria-expanded="false"
                                data-state="closed"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    class="lucide lucide-ellipsis"
                                >
                                    <circle cx="12" cy="12" r="1"></circle>
                                    <circle cx="19" cy="12" r="1"></circle>
                                    <circle cx="5" cy="12" r="1"></circle>
                                </svg>
                                <span class="sr-only">Open menu</span>
                            </button>
                        </td>
                    </tr>
                    <tr class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted" data-state="false">
                        <td class="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px]">
                            <button
                                type="button"
                                role="checkbox"
                                aria-checked="false"
                                data-state="unchecked"
                                value="on"
                                class="peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground translate-y-[2px]"
                                aria-label="Select row"
                            ></button>
                        </td>
                        <td class="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px]"><div class="w-[80px]">TASK-5562</div></td>
                        <td class="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px]">
                            <div class="flex space-x-2">
                                <div class="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground">Feature</div>
                                <span class="max-w-[500px] truncate font-medium">The SAS interface is down, bypass the open-source pixel so we can back up the PNG bandwidth!</span>
                            </div>
                        </td>
                        <td class="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px]">
                            <div class="flex w-[100px] items-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    class="lucide lucide-circle-help mr-2 h-4 w-4 text-muted-foreground"
                                >
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                                    <path d="M12 17h.01"></path>
                                </svg>
                                <span>Backlog</span>
                            </div>
                        </td>
                        <td class="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px]">
                            <div class="flex items-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    class="lucide lucide-arrow-right mr-2 h-4 w-4 text-muted-foreground"
                                >
                                    <path d="M5 12h14"></path>
                                    <path d="m12 5 7 7-7 7"></path>
                                </svg>
                                <span>Medium</span>
                            </div>
                        </td>
                        <td class="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px]">
                            <button
                                class="items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground flex h-8 w-8 p-0 data-[state=open]:bg-muted"
                                type="button"
                                id="radix-:r397:"
                                aria-haspopup="menu"
                                aria-expanded="false"
                                data-state="closed"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    class="lucide lucide-ellipsis"
                                >
                                    <circle cx="12" cy="12" r="1"></circle>
                                    <circle cx="19" cy="12" r="1"></circle>
                                    <circle cx="5" cy="12" r="1"></circle>
                                </svg>
                                <span class="sr-only">Open menu</span>
                            </button>
                        </td>
                    </tr>
                    <tr class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted" data-state="false">
                        <td class="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px]">
                            <button
                                type="button"
                                role="checkbox"
                                aria-checked="false"
                                data-state="unchecked"
                                value="on"
                                class="peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground translate-y-[2px]"
                                aria-label="Select row"
                            ></button>
                        </td>
                        <td class="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px]"><div class="w-[80px]">TASK-8686</div></td>
                        <td class="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px]">
                            <div class="flex space-x-2">
                                <div class="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground">Feature</div>
                                <span class="max-w-[500px] truncate font-medium">I'll parse the wireless SSL protocol, that should driver the API panel!</span>
                            </div>
                        </td>
                        <td class="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px]">
                            <div class="flex w-[100px] items-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    class="lucide lucide-circle-off mr-2 h-4 w-4 text-muted-foreground"
                                >
                                    <path d="m2 2 20 20"></path>
                                    <path d="M8.35 2.69A10 10 0 0 1 21.3 15.65"></path>
                                    <path d="M19.08 19.08A10 10 0 1 1 4.92 4.92"></path>
                                </svg>
                                <span>Canceled</span>
                            </div>
                        </td>
                        <td class="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px]">
                            <div class="flex items-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    class="lucide lucide-arrow-right mr-2 h-4 w-4 text-muted-foreground"
                                >
                                    <path d="M5 12h14"></path>
                                    <path d="m12 5 7 7-7 7"></path>
                                </svg>
                                <span>Medium</span>
                            </div>
                        </td>
                        <td class="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px]">
                            <button
                                class="items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground flex h-8 w-8 p-0 data-[state=open]:bg-muted"
                                type="button"
                                id="radix-:r399:"
                                aria-haspopup="menu"
                                aria-expanded="false"
                                data-state="closed"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    class="lucide lucide-ellipsis"
                                >
                                    <circle cx="12" cy="12" r="1"></circle>
                                    <circle cx="19" cy="12" r="1"></circle>
                                    <circle cx="5" cy="12" r="1"></circle>
                                </svg>
                                <span class="sr-only">Open menu</span>
                            </button>
                        </td>
                    </tr>
                    <tr class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted" data-state="false">
                        <td class="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px]">
                            <button
                                type="button"
                                role="checkbox"
                                aria-checked="false"
                                data-state="unchecked"
                                value="on"
                                class="peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground translate-y-[2px]"
                                aria-label="Select row"
                            ></button>
                        </td>
                        <td class="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px]"><div class="w-[80px]">TASK-1280</div></td>
                        <td class="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px]">
                            <div class="flex space-x-2">
                                <div class="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground">Bug</div>
                                <span class="max-w-[500px] truncate font-medium">Use the digital TLS panel, then you can transmit the haptic system!</span>
                            </div>
                        </td>
                        <td class="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px]">
                            <div class="flex w-[100px] items-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    class="lucide lucide-circle-check-big mr-2 h-4 w-4 text-muted-foreground"
                                >
                                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                    <path d="m9 11 3 3L22 4"></path>
                                </svg>
                                <span>Done</span>
                            </div>
                        </td>
                        <td class="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px]">
                            <div class="flex items-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    class="lucide lucide-arrow-up mr-2 h-4 w-4 text-muted-foreground"
                                >
                                    <path d="m5 12 7-7 7 7"></path>
                                    <path d="M12 19V5"></path>
                                </svg>
                                <span>High</span>
                            </div>
                        </td>
                        <td class="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px]">
                            <button
                                class="items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground flex h-8 w-8 p-0 data-[state=open]:bg-muted"
                                type="button"
                                id="radix-:r39b:"
                                aria-haspopup="menu"
                                aria-expanded="false"
                                data-state="closed"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    class="lucide lucide-ellipsis"
                                >
                                    <circle cx="12" cy="12" r="1"></circle>
                                    <circle cx="19" cy="12" r="1"></circle>
                                    <circle cx="5" cy="12" r="1"></circle>
                                </svg>
                                <span class="sr-only">Open menu</span>
                            </button>
                        </td>
                    </tr>
                    <tr class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted" data-state="false">
                        <td class="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px]">
                            <button
                                type="button"
                                role="checkbox"
                                aria-checked="false"
                                data-state="unchecked"
                                value="on"
                                class="peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground translate-y-[2px]"
                                aria-label="Select row"
                            ></button>
                        </td>
                        <td class="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px]"><div class="w-[80px]">TASK-7262</div></td>
                        <td class="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px]">
                            <div class="flex space-x-2">
                                <div class="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground">Feature</div>
                                <span class="max-w-[500px] truncate font-medium">The UTF8 application is down, parse the neural bandwidth so we can back up the PNG firewall!</span>
                            </div>
                        </td>
                        <td class="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px]">
                            <div class="flex w-[100px] items-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    class="lucide lucide-circle-check-big mr-2 h-4 w-4 text-muted-foreground"
                                >
                                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                    <path d="m9 11 3 3L22 4"></path>
                                </svg>
                                <span>Done</span>
                            </div>
                        </td>
                        <td class="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px]">
                            <div class="flex items-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    class="lucide lucide-arrow-up mr-2 h-4 w-4 text-muted-foreground"
                                >
                                    <path d="m5 12 7-7 7 7"></path>
                                    <path d="M12 19V5"></path>
                                </svg>
                                <span>High</span>
                            </div>
                        </td>
                        <td class="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px]">
                            <button
                                class="items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground flex h-8 w-8 p-0 data-[state=open]:bg-muted"
                                type="button"
                                id="radix-:r39d:"
                                aria-haspopup="menu"
                                aria-expanded="false"
                                data-state="closed"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    class="lucide lucide-ellipsis"
                                >
                                    <circle cx="12" cy="12" r="1"></circle>
                                    <circle cx="19" cy="12" r="1"></circle>
                                    <circle cx="5" cy="12" r="1"></circle>
                                </svg>
                                <span class="sr-only">Open menu</span>
                            </button>
                        </td>
                    </tr>
                    <tr class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted" data-state="false">
                        <td class="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px]">
                            <button
                                type="button"
                                role="checkbox"
                                aria-checked="false"
                                data-state="unchecked"
                                value="on"
                                class="peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground translate-y-[2px]"
                                aria-label="Select row"
                            ></button>
                        </td>
                        <td class="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px]"><div class="w-[80px]">TASK-1138</div></td>
                        <td class="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px]">
                            <div class="flex space-x-2">
                                <div class="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground">Feature</div>
                                <span class="max-w-[500px] truncate font-medium">Generating the driver won't do anything, we need to quantify the 1080p SMTP bandwidth!</span>
                            </div>
                        </td>
                        <td class="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px]">
                            <div class="flex w-[100px] items-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    class="lucide lucide-timer mr-2 h-4 w-4 text-muted-foreground"
                                >
                                    <line x1="10" x2="14" y1="2" y2="2"></line>
                                    <line x1="12" x2="15" y1="14" y2="11"></line>
                                    <circle cx="12" cy="14" r="8"></circle>
                                </svg>
                                <span>In Progress</span>
                            </div>
                        </td>
                        <td class="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px]">
                            <div class="flex items-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    class="lucide lucide-arrow-right mr-2 h-4 w-4 text-muted-foreground"
                                >
                                    <path d="M5 12h14"></path>
                                    <path d="m12 5 7 7-7 7"></path>
                                </svg>
                                <span>Medium</span>
                            </div>
                        </td>
                        <td class="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px]">
                            <button
                                class="items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground flex h-8 w-8 p-0 data-[state=open]:bg-muted"
                                type="button"
                                id="radix-:r39f:"
                                aria-haspopup="menu"
                                aria-expanded="false"
                                data-state="closed"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    class="lucide lucide-ellipsis"
                                >
                                    <circle cx="12" cy="12" r="1"></circle>
                                    <circle cx="19" cy="12" r="1"></circle>
                                    <circle cx="5" cy="12" r="1"></circle>
                                </svg>
                                <span class="sr-only">Open menu</span>
                            </button>
                        </td>
                    </tr>
                    <tr class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted" data-state="false">
                        <td class="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px]">
                            <button
                                type="button"
                                role="checkbox"
                                aria-checked="false"
                                data-state="unchecked"
                                value="on"
                                class="peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground translate-y-[2px]"
                                aria-label="Select row"
                            ></button>
                        </td>
                        <td class="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px]"><div class="w-[80px]">TASK-7184</div></td>
                        <td class="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px]">
                            <div class="flex space-x-2">
                                <div class="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground">Feature</div>
                                <span class="max-w-[500px] truncate font-medium">We need to program the back-end THX pixel!</span>
                            </div>
                        </td>
                        <td class="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px]">
                            <div class="flex w-[100px] items-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    class="lucide lucide-circle mr-2 h-4 w-4 text-muted-foreground"
                                >
                                    <circle cx="12" cy="12" r="10"></circle>
                                </svg>
                                <span>Todo</span>
                            </div>
                        </td>
                        <td class="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px]">
                            <div class="flex items-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    class="lucide lucide-arrow-down mr-2 h-4 w-4 text-muted-foreground"
                                >
                                    <path d="M12 5v14"></path>
                                    <path d="m19 12-7 7-7-7"></path>
                                </svg>
                                <span>Low</span>
                            </div>
                        </td>
                        <td class="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px]">
                            <button
                                class="items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground flex h-8 w-8 p-0 data-[state=open]:bg-muted"
                                type="button"
                                id="radix-:r39h:"
                                aria-haspopup="menu"
                                aria-expanded="false"
                                data-state="closed"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    class="lucide lucide-ellipsis"
                                >
                                    <circle cx="12" cy="12" r="1"></circle>
                                    <circle cx="19" cy="12" r="1"></circle>
                                    <circle cx="5" cy="12" r="1"></circle>
                                </svg>
                                <span class="sr-only">Open menu</span>
                            </button>
                        </td>
                    </tr>
                    <tr class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted" data-state="false">
                        <td class="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px]">
                            <button
                                type="button"
                                role="checkbox"
                                aria-checked="false"
                                data-state="unchecked"
                                value="on"
                                class="peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground translate-y-[2px]"
                                aria-label="Select row"
                            ></button>
                        </td>
                        <td class="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px]"><div class="w-[80px]">TASK-5160</div></td>
                        <td class="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px]">
                            <div class="flex space-x-2">
                                <div class="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground">
                                    Documentation
                                </div>
                                <span class="max-w-[500px] truncate font-medium">Calculating the bus won't do anything, we need to navigate the back-end JSON protocol!</span>
                            </div>
                        </td>
                        <td class="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px]">
                            <div class="flex w-[100px] items-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    class="lucide lucide-timer mr-2 h-4 w-4 text-muted-foreground"
                                >
                                    <line x1="10" x2="14" y1="2" y2="2"></line>
                                    <line x1="12" x2="15" y1="14" y2="11"></line>
                                    <circle cx="12" cy="14" r="8"></circle>
                                </svg>
                                <span>In Progress</span>
                            </div>
                        </td>
                        <td class="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px]">
                            <div class="flex items-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    class="lucide lucide-arrow-up mr-2 h-4 w-4 text-muted-foreground"
                                >
                                    <path d="m5 12 7-7 7 7"></path>
                                    <path d="M12 19V5"></path>
                                </svg>
                                <span>High</span>
                            </div>
                        </td>
                        <td class="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px]">
                            <button
                                class="items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground flex h-8 w-8 p-0 data-[state=open]:bg-muted"
                                type="button"
                                id="radix-:r39j:"
                                aria-haspopup="menu"
                                aria-expanded="false"
                                data-state="closed"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    class="lucide lucide-ellipsis"
                                >
                                    <circle cx="12" cy="12" r="1"></circle>
                                    <circle cx="19" cy="12" r="1"></circle>
                                    <circle cx="5" cy="12" r="1"></circle>
                                </svg>
                                <span class="sr-only">Open menu</span>
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div class="flex items-center justify-between px-2">
        <div class="flex-1 text-sm text-muted-foreground">0 of 100 row(s) selected.</div>
        <div class="flex items-center space-x-6 lg:space-x-8">
            <div class="flex items-center space-x-2">
                <p class="text-sm font-medium">Rows per page</p>
                <button
                    type="button"
                    role="combobox"
                    aria-controls="radix-:r39l:"
                    aria-expanded="false"
                    aria-autocomplete="none"
                    dir="ltr"
                    data-state="closed"
                    class="flex items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&amp;>span]:line-clamp-1 h-8 w-[70px]"
                >
                    <span style="pointer-events: none;">10</span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="lucide lucide-chevron-down h-4 w-4 opacity-50"
                        aria-hidden="true"
                    >
                        <path d="m6 9 6 6 6-6"></path>
                    </svg>
                </button>
            </div>
            <div class="flex w-[100px] items-center justify-center text-sm font-medium">Page 1 of 10</div>
            <div class="flex items-center space-x-2">
                <button
                    class="items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground hidden h-8 w-8 p-0 lg:flex"
                    disabled=""
                >
                    <span class="sr-only">Go to first page</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevrons-left">
                        <path d="m11 17-5-5 5-5"></path>
                        <path d="m18 17-5-5 5-5"></path>
                    </svg>
                </button>
                <button
                    class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-8 w-8 p-0"
                    disabled=""
                >
                    <span class="sr-only">Go to previous page</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-left">
                        <path d="m15 18-6-6 6-6"></path>
                    </svg>
                </button>
                <button
                    class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-8 w-8 p-0"
                >
                    <span class="sr-only">Go to next page</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right">
                        <path d="m9 18 6-6-6-6"></path>
                    </svg>
                </button>
                <button
                    class="items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground hidden h-8 w-8 p-0 lg:flex"
                >
                    <span class="sr-only">Go to last page</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevrons-right">
                        <path d="m6 17 5-5-5-5"></path>
                        <path d="m13 17 5-5-5-5"></path>
                    </svg>
                </button>
            </div>
        </div>
    </div>
</div>

    )
}

export default Order