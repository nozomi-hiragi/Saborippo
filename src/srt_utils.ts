type SrtUnit = {
  index: number;
  time: string;
  text: string;
};

export const convertSrtToUnits = (srtContent: string) => {
  const lines = srtContent.split("\n");
  const subtitles: SrtUnit[] = [];

  for (let i = 0; i < lines.length; i++) {
    const lineIndex = lines[i];
    const lineTime = lines[++i];
    if (!lineIndex || !lineTime) break;

    const currentSrtUnit = {
      index: Number(lineIndex.trim()),
      time: lineTime.trim(),
      text: "",
    };

    for (
      let line = lines[++i];
      i < lines.length && line && line.trim();
      line = lines[++i]
    ) {
      currentSrtUnit.text += line + "\n";
    }
    subtitles.push(currentSrtUnit);
  }

  return subtitles;
};

export const convertUnitsToSrt = (subtitles: SrtUnit[]) =>
  subtitles.map((unit) => `${unit.index}\n${unit.time}\n${unit.text.trim()}\n`)
    .join("\n");

export function textsStr(subtitles: SrtUnit[]) {
  let srtText = "";
  let index = 1;

  for (const subtitle of subtitles) {
    srtText += subtitle.index + "\n";
    srtText += subtitle.text.trim() + "\n";
    index++;
  }

  return srtText;
}

export function timesStr(subtitles: SrtUnit[]) {
  let srtText = "";
  let index = 1;

  for (const subtitle of subtitles) {
    srtText += subtitle.index + "\n";
    srtText += subtitle.time.trim() + "\n";
    index++;
  }

  return srtText;
}

export function combineSubtitles(texts: string, times: string) {
  const textLines = texts.split("\n");
  const timeLines = times.split("\n");

  const subtitles: SrtUnit[] = [];
  let currentSubtitle: SrtUnit = {
    index: 0,
    time: "",
    text: "",
  };

  let textIndex = 0;
  let timeIndex = 0;

  while (textIndex < textLines.length || timeIndex < timeLines.length) {
    const text = textLines[textIndex].trim();
    const time = timeLines[timeIndex].trim();

    try {
      if (text === time && !isNaN(Number(text))) {
        if (currentSubtitle.index) {
          subtitles.push(currentSubtitle);
        }
        textIndex++;
        timeIndex++;
        const nextText = textLines[textIndex];
        const nextTime = timeLines[timeIndex];
        if (!nextText || !nextTime) break;

        currentSubtitle = {
          index: Number(text),
          time: nextTime.trim(),
          text: nextText.trim() + "\n",
        };

        textIndex++;
        timeIndex++;
      } else {
        currentSubtitle.text += text + "\n";
        textIndex++;
      }
    } catch (e) {
      throw e;
    }
  }

  return subtitles;
}
