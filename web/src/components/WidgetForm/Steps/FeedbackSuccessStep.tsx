import successSvg from "../../../assets/success.svg";
import { CloseButton } from "../../CloseButton";

interface FeedbackSuccessStepProps {
  onFeedbackRestartRequested: () => void;
}

export function FeedbackSuccessStep({
  onFeedbackRestartRequested,
}: FeedbackSuccessStepProps) {
  return (
    <>
      <header>
        <CloseButton />
      </header>
      <div className="flex flex-col items-center py-10 w-[304px] ">
        <img src={successSvg} alt="imagem de sucesso" />
        <span className="text-xl mt-2">Agradecemos o feedback!</span>
        <button
          onClick={onFeedbackRestartRequested}
          type="button"
          className="bg-zinc-800 py-2 px-6 mt-6 rounded-md border-transparent text-sm leading-6 hover:bg-zinc-700  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors disabled:opacity-50 disabled:hover:bg-brand-500"
        >
          Quero enviar outro
        </button>
      </div>
    </>
  );
}
