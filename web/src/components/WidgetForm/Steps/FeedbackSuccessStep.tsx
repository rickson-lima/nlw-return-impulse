import { CloseButton } from "../../CloseButton";
import SuccessIcon from '../../../assets/success.svg'

interface FeedbackSuccessProps {
  onFeedbackRestartRequested: () => void
}

export function FeedbackSuccessStep({ onFeedbackRestartRequested }: FeedbackSuccessProps) {

  return (
    <>
      <header>
        <CloseButton />
      </header>

      <div className="flex flex-col items-center pt-10 w-[304px]">
        <img src={SuccessIcon} alt="Sucesso ao cadastrar feedback" />
      </div>

      <span className="text-xl mt-2">Agradecemos o feedback!</span>

      <button
        onClick={onFeedbackRestartRequested}
        className="py-2 px-6 my-8 bg-zinc-800 rounded-md border-transparent text-sm leading-6 hover:bg-zinc-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 disabled:opacity-50 disabled:hover:bg-brand-500"
      >
        Quero enviar outro
      </button>
    </>
  )
}