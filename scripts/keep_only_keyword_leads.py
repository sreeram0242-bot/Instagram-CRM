import os
import json

state_path = os.path.join(os.path.dirname(os.path.dirname(__file__)), "backend_state.json")
with open(state_path, "r", encoding="utf-8") as f:
    state = json.load(f)

# Keep ONLY leads who actually matched a trigger keyword
# @gym_flow_offical is the only user who sent the keyword 'Hi' (#HI on Reel #18079)
keyword_leads = [l for l in state.get("leads", []) if l.get("handle") == "@gym_flow_offical"]

state["leads"] = keyword_leads

with open(state_path, "w", encoding="utf-8") as f:
    json.dump(state, f, indent=2)

print(f"Updated backend_state.json: Now contains {len(state['leads'])} keyword-matched lead(s): {[l['handle'] for l in state['leads']]}")
