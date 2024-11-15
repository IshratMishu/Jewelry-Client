

const ReviewForm = () => {
    return (
        <div>
            <form className="w-full space-y-6">
                <div className="space-y-2 text-sm">
                    <label className="block font-medium">
                        Name *
                    </label>
                    <input
                        className="h-10 w-full border border-black px-3 py-2 text-sm focus:outline-none bg-transparent"
                        name="name"
                        type="text"
                    />
                </div>
                <div className="space-y-2 text-sm">
                    <label className="block font-medium">
                        Email *
                    </label>
                    <input
                        className="h-10 w-full border border-black px-3 py-2 text-sm focus:outline-none bg-transparent"
                        name="email"
                        type="email"
                    />
                </div>
                <div className="space-y-2 text-sm">
                    <label className="block font-medium">
                        Your review *
                    </label>
                    <textarea
                        className="min-h-[90px] w-full border-black border px-3 py-2 focus:outline-none bg-transparent"
                        name="message"
                    />
                </div>
                <button className="bg-[--secondary-color] px-4 py-2 text-white hover:bg-transparent hover:text-[--secondary-color] border hover:border-[--secondary-color]">Submit</button>
            </form>
        </div>
    );
};

export default ReviewForm;