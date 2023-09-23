import { SpanGood, SpanNeutral, SpanBad, SpanTotal, SpanPercent, ContainerStatistic } from "./Statistic.styled";

export const Statistic = ({ good, neutral, bad, total, positivePercentage }) => {
    return (
        <>
        <ContainerStatistic>
            <SpanGood>Good: {good}</SpanGood>
            <SpanNeutral>Neutral: {neutral}</SpanNeutral>
            <SpanBad>Bad: {bad}</SpanBad>
            <SpanTotal>Total: {total}</SpanTotal>
            <SpanPercent>Positive feedback: {positivePercentage}%</SpanPercent>
            </ContainerStatistic>
        </>
    );
}