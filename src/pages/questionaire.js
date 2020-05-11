import React, { useState } from "react";
import { useQuestionaire, updateQuestionaire } from "../api/questionaireApi";

//import Button from "../components/button";

export default function ShowQuestionaire() {
  const {
    loadingQuestionaire,
    userQuestionaire,
    errorQuestionaire,
  } = useQuestionaire();
  if (loadingQuestionaire) {
    return <p>Loading...</p>;
  }
  if (errorQuestionaire) {
    return <p>Something went wrong: {errorQuestionaire.message}</p>;
  }
  console.log("called");
  // use this to make sure you are getting the right data
  console.log(userQuestionaire);

  // Display a list of the authors
  return (
    <div>
      <h1>My Questionaire</h1>
      <Questionaire key={userQuestionaire.accountId} {...userQuestionaire} />
    </div>
  );
}

function Questionaire(questionaire) {
  const { accountId, filter1, filter2 } = questionaire;

  const {
    sameNationalityPref,
    sameGenderPref,
    sameLocationPref,
    petsPref,
    sameLangPref,
    numRoommeePref,
    ageDiffRange,
  } = filter1;

  const {
    homeCookRate,
    nightOwlRate,
    playsMusicRate,
    seekIntrovertRate,
    seekExtrovertRate,
    cleanlinessToleranceRate,
  } = filter2;

  const [sameNationalityPrefInput, setSameNationalityPref] = useState(
    sameNationalityPref
  );
  const [sameGenderPrefInput, setSameGenderPref] = useState(sameGenderPref);
  const [sameLocationPrefInput, setSameLocationPref] = useState(
    sameLocationPref
  );
  const [petsPrefInput, setPetsPref] = useState(petsPref);
  const [sameLangPrefInput, setSameLangPref] = useState(sameLangPref);
  const [numRoommeePrefInput, setNumRoommeePref] = useState(numRoommeePref);
  const [ageDiffRangeInput, setAgeDiffRange] = useState(ageDiffRange);
  const [homeCookRateInput, setHomeCookRate] = useState(homeCookRate);
  const [nightOwlRateInput, setNightOwlRate] = useState(nightOwlRate);
  const [playsMusicRateInput, setPlaysMusicRate] = useState(playsMusicRate);
  const [seekIntrovertRateInput, setSeekIntrovertRate] = useState(
    seekIntrovertRate
  );
  const [seekExtrovertRateInput, setSeekExtrovertRate] = useState(
    seekExtrovertRate
  );
  const [cleanlinessToleranceRateInput, setCleanlinessToleranceRate] = useState(
    cleanlinessToleranceRate
  );

  function onSubmit() {
    // call upate author function
    console.log(typeof playsMusicRateInput);
    updateQuestionaire({
      sameNationalityPref: sameNationalityPrefInput,
      sameGenderPref: sameGenderPrefInput,
      sameLocationPref: sameLocationPrefInput,
      petsPref: petsPrefInput,
      sameLangPref: sameLangPrefInput,
      numRoommeePref: numRoommeePrefInput,
      ageDiffRange: ageDiffRangeInput,
      homeCookRate: homeCookRateInput,
      nightOwlRate: nightOwlRateInput,
      playsMusicRate: playsMusicRateInput,
      seekIntrovertRate: seekIntrovertRateInput,
      seekExtrovertRate: seekExtrovertRateInput,
      cleanlinessToleranceRate: cleanlinessToleranceRateInput,
    });
  }

  return (
    <div className={`questionaire user-${accountId}`} key={accountId}>
      <form>
        <label>
          Do you prefer to have the same nationality for your Roommee?{" "}
        </label>
        <input
          type="text"
          name="sameNationalityPref"
          value={sameNationalityPrefInput}
          onChange={(event) => {
            setSameNationalityPref(event.target.value);
          }}
          required
        />
        <br></br>
        <label>Do you prefer to have the same gender for your Roommee? </label>
        <input
          type="text"
          name="sameGenderPref"
          value={sameGenderPrefInput}
          onChange={(event) => {
            setSameGenderPref(event.target.value);
          }}
          required
        />
        <br></br>

        <label>
          Do you want your Roommee to have the same suburb preference?{" "}
        </label>
        <input
          type="text"
          name="sameLocationPref"
          value={sameLocationPrefInput}
          onChange={(event) => {
            setSameLocationPref(event.target.value);
          }}
          required
        />
        <br></br>

        <label>Do you mind if your Roommee have a pet? </label>
        <input
          type="text"
          name="petsPref"
          value={petsPrefInput}
          onChange={(event) => {
            setPetsPref(event.target.value);
          }}
          required
        />
        <br></br>

        <label>
          Do you prefer having the same language with your Roommee?{" "}
        </label>
        <input
          type="text"
          name="sameLangPref"
          value={sameLangPrefInput}
          onChange={(event) => {
            setSameLangPref(event.target.value);
          }}
          required
        />
        <br></br>

        <label>How many Roommee are you looking for? </label>
        <input
          type="text"
          name="numRoommeePref"
          value={numRoommeePrefInput}
          onChange={(event) => {
            setNumRoommeePref(event.target.value);
          }}
          required
        />
        <br></br>

        <label>Please indicate the range age gap for your roommee: </label>
        <input
          type="text"
          name="ageDiffRange"
          value={ageDiffRangeInput}
          onChange={(event) => {
            setAgeDiffRange(event.target.value);
          }}
        />
        <br></br>

        <label>Enjoy home cooking: </label>
        <input
          type="number"
          name="homeCookRate"
          value={homeCookRateInput}
          onChange={(event) => {
            setHomeCookRate(event.target.value);
          }}
        />
        <br></br>

        <label>Your night owl rating: </label>
        <input
          type="number"
          name="nightOwlRate"
          value={nightOwlRateInput}
          onChange={(event) => {
            setNightOwlRate(event.target.value);
          }}
        />
        <br></br>

        <label>Enjoy hearing and playing music : </label>
        <input
          type="number"
          name="playsMusicRate"
          value={playsMusicRateInput}
          onChange={(event) => {
            setPlaysMusicRate(event.target.value);
          }}
        />
        <br></br>

        <label>Your introvert rating: </label>
        <input
          type="number"
          name="seekIntrovertRate"
          value={seekIntrovertRateInput}
          onChange={(event) => {
            setSeekIntrovertRate(event.target.value);
          }}
        />
        <br></br>

        <label>Your extrovert rating: </label>
        <input
          type="number"
          name="seekExtrovertRate"
          value={seekExtrovertRateInput}
          onChange={(event) => {
            setSeekExtrovertRate(event.target.value);
          }}
        />
        <br></br>

        <label>Cleanliness tolerance: </label>
        <input
          type="number"
          name="cleanlinessToleranceRate"
          value={cleanlinessToleranceRateInput}
          onChange={(event) => {
            setCleanlinessToleranceRate(event.target.value);
          }}
        />
        <br></br>

        <button className="btn-update" onClick={onSubmit}>
          Update
        </button>
      </form>
      {/* <Button className={"btn-update"} onClick={onSubmit}>
                Update
            </Button> */}
    </div>
  );
}
