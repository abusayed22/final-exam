import React from "react";

function MiniModal({ open, control }) {
  return (
    open && (
      <>
        <div
          onClick={() => control()}
          className="fixed w-full h-full inset-0 z-10 bg-black/50 cursor-pointer"
        ></div>

        <div className="rounded w-[400px] lg:w-[600px] space-y-8 bg-white p-10 absolute top-1/2 left-1/2 z-20 -translate-x-1/2 -translate-y-1/2">
        <form>
				{/* <Select
					placeholder={'Select team'}
					options={options}
					noOptionsMessage={() => 'your not assigned to this team or team not exist'}
					isSearchable={true}
					onChange={(selectedOption) => setFormData({ ...formData, team: selectedOption.value })}
				/> */}

				<input
					type='text'
					placeholder='Title'
					name='title'
					required
				/>
				<input
					type='text'
					placeholder='Avatar-url'
					name='avatar'
					required
				/>
				<div className='text-center text-right mt-4 flex'>
					<button
						className='inline-block w-auto px-4 py-3 py-2 bg-green-300 rounded-lg font-semibold text-sm mt-4 mt-0 order-1'
						type='submit'>
						Create
					</button>
					<button
						className='ml-2 inline-block w-auto px-4 py-3 py-2 bg-red-300 rounded-lg font-semibold text-sm mt-4 mt-0 order-1'
						type='button'
						disabled=''
						onClick={() => control()}>
						Cancel
					</button>
				</div>
			</form>
        </div>
      </>
    )
  );
}

export default MiniModal;
