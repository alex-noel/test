export const getFlexBasic = (span: number) => {
  if (!span) {
    return;
  }
  const flexBasis = (100 / 12) * span;
  const width = `width: ${flexBasis}%;`;
  const maxWidth = `max-width: ${flexBasis}%;`;

  const flexBasisCSS = `flex-basis: ${flexBasis}%;`;

  return `${width}${maxWidth}${flexBasisCSS}`;
};
