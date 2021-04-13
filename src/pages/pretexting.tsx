import React from 'react'

import Sidebar from '../components/Sidebar'

export default function Pretexting() {
  return (
    <div className="container">
      <div className="layout">
        <div className="pretexting">
          <div className="">
            <h3>Understanding Pretexting</h3>
            <p>There are different techniques used by social engineers to exploit the psychology of their targets. Pretexting is one of the most popular of them.</p>
            <p>Pretexting, just like phishing, is a scam that is aimed at manipulating targeted individual by pretending to be a legitimate to trick the target into giving away data that they ordinarily would not expose. In the case of pretexting, the social engineer creates a fake but convincing scenario know as the pretext. The pretext is designed after a social engineer had gathered information enough to make educated guess on the target, hence, the ability to make a pretext that can excite the target. This form of attack is performed via emails, text messages, phone calls, and face to face.</p>

            <h3>Protecting from Pretexting</h3>
            <p>You would agree with me that if you know from which window a burglar accesses your home, you will pay attention to activities going on at that window. Hence, to protect from pretexting, one should understand:</p>
            <ul>
              <li>•	The flow of an attack (attack framework).</li>
              <li>•	What it takes to make an attack successful.</li>
            </ul>

            <p>For this purpose, we will adopt the framework provided by Mouton et al (2014).</p>

            <img src={`/Picture1.png`} alt="pretexting image 1" />
            <span style={{ fontStyle: 'italic' }}>Fig. 1	Social engineering attack framework</span>

            <p>The attack formulation is the conception point of the attack. Goals are made by the social engineer, and a target is acquired.</p>

            <h4>Example 1:</h4>
            <p style={{ color: 'blue', fontStyle: 'italic' }}>When the goal is financial gain, and the target to satisfy the goal is a bank: the social engineering target would be a staff in the bank who has privileged access to the bank’s network. For the reason of this lesson, let us choose the HR Manager.</p>

            <p>Sources to retrieve information on the target is then identified in the beginning of the information gathering phase. Information gathered is assessed to determine viability. The information gathered are usually publicly available on social media, public records, and more. These information enables the social engineer to perform educated guess on the target which will be useful in the “development of an attack vector.”</p>

            <p>Attack to be launched is prepared with the viable data gathered on target. Here, the social engineer analyses the data, makes educated guesses, creates scenarios (pretext) that will excite the target and choses an effective compliance principle.</p>

            <p>Compliance principle in this context refers to the reason why a target will respond positively to the request of the social engineer. It is in other words, the psychology of the target that was hacked. Few examples of compliance principles are:</p>
            <ul>
              <li>•	Authority</li>
              <li>•	Likeness or Friendship</li>
              <li>•	Social validation</li>
              <li>•	Reciprocity</li>
              <li>•	Scarcity</li>
              <li>•	Commitment</li>
            </ul>

            <p>In the rapport building, one or more of the compliance principles are applied to gain trust of the target, and to make them feel they are doing the right thing when giving up privileged credentials.</p>

            <h4>Follow-up to Example 1:</h4>
            <p style={{ color: 'blue', fontStyle: 'italic' }}>The social engineer identifies the HR Manager and performs reconnaissance on her and finds that he could be susceptible to fear, then the best compliance principle to apply is “Authority.” A pretext will then be created. Over the weekend, the HR Manager then receives a call of urgency from the social engineer who will now identify as the bank’s Chief Information Security Officer. And report a breach in the bank’s network and a need to reset every password, hence the HR Manager should avail his credentials. Out of panic, respect for authority and the need to do the right thing, the HR Manager divulges himself of the credentials.</p>

            <p>Once the relationship is exploited, the social engineer uses the data acquired to proceed for goal satisfaction.</p>

            <h4>What can be done differently?</h4>
            <img src={`/Picture2.png`} alt="pretexting image 2" />
            <span style={{ fontStyle: 'italic' }}>Fig. 2	Attack Framework Specific to Pretexting</span>

            <p>From Fig. 2, though it bears similarities to Fig. 1, it gives a picture of the points where fortunes can turn positively for the target. Targets’ behaviour and attributes can influence an attack. The blue arrows signify a progressive attack structure, while the green arrows signify a change in attack flow. It will be observed that the green arrows all return to “Target Acquisition.”</p>

            <p>Some online behaviours that makes one an easy target includes:</p>
            <ul>
              <li>•	Having much of one’s information on their social media account.</li>
              <li>•	Regular posting of personal activities and lifestyle.</li>
              <li>•	Easily trusting strangers.</li>
              <li>•	Indiscrete clicking of links and opening ads from untrusted sources.</li>
              <li>•	Not being keen to apply security setting provided by the host platform (although the host platforms sell users details, the privacy settings reduces one’s chance of being a target or being impersonated to scam others).</li>
            </ul>

            <p>With a more discrete online behaviour, a social engineer could return to the point of target acquisition to select another target when they cannot identify a good platform to perform reconnaissance and when the data they have on a target is rubbish and not viable.</p>

            <p>At the point of rapport building and exploitation, a social engineering detection attack model proposed by Bezuidenhout, Mouton, and Venter (2010) provides a safe action flow.</p>
          </div>

          <img src={`/Picture3.png`} alt="pretexting image 3" />
          <span style={{ fontStyle: 'italic' }}>Fig. 3	Social Engineering Attack Detection Model</span>

          <span>Footnote: This entire work is based on the main body of the dissertation report.</span>
        </div>
        <Sidebar />
      </div>
    </div>
  )
}
